// Contact form: validates the enquiry, attaches the uploaded files and e-mails it to the
// office through Resend. Nothing is stored; uploaded files are deleted after sending.
import { Resend } from 'resend';
import { del, get } from '@vercel/blob';
import { MAX_FILE_BYTES, checkSignature, validateInquiry, validateUploads } from '../../../lib/inquiry-validation.mjs';
import { customerEmail, officeEmail, referenceFrom } from '../../../lib/inquiry-email.mjs';
import { json, sameOrigin } from '../../../lib/http';

export const maxDuration = 60;

const PHONE = '2310 445 935';
const unavailable = () =>
  json({ error: `Το αίτημα δεν στάλθηκε. Τα στοιχεία παραμένουν στη φόρμα· δοκίμασε ξανά ή κάλεσε στο ${PHONE}.` }, 503);

async function turnstileOk(token: string, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Turnstile not configured: honeypot only.
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (ip) body.set('remoteip', ip);
  try {
    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body, signal: AbortSignal.timeout(7000) });
    return ((await r.json()) as { success?: boolean }).success === true;
  } catch {
    return false;
  }
}

async function readBlob(pathname: string) {
  const r = await get(pathname, { access: 'private', useCache: false });
  if (!r || r.statusCode !== 200 || r.blob.size > MAX_FILE_BYTES) return null;
  const bytes = new Uint8Array(await new Response(r.stream).arrayBuffer());
  if (bytes.byteLength > MAX_FILE_BYTES || !checkSignature(bytes, r.blob.contentType)) return null;
  return { bytes, type: r.blob.contentType };
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return json({ error: 'Μη έγκυρη προέλευση αιτήματος.' }, 403);
  let data: Record<string, unknown>;
  try {
    data = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'Μη έγκυρο αίτημα.' }, 400);
  }
  if (data.website) return json({ error: 'Η υποβολή δεν ολοκληρώθηκε. Δοκίμασε ξανά.' }, 400);

  const { clean: c, errors, valid } = validateInquiry(data);
  if (!valid) return json({ errors, error: 'Έλεγξε τα πεδία που σημειώνονται.' }, 422);
  const uploads = validateUploads(data.files, c.idempotency);
  if (!uploads.valid) return json({ errors: { files: 'Έως 3 αρχεία ανά αίτημα.' } }, 422);
  if (!(await turnstileOk(String(data.turnstile ?? ''), request))) {
    return json({ errors: { form: 'Η επαλήθευση ασφαλείας απέτυχε. Δοκίμασε ξανά.' }, error: 'Η επαλήθευση ασφαλείας απέτυχε. Δοκίμασε ξανά.' }, 400);
  }

  const ref = referenceFrom(c.idempotency);
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  try {
    for (const f of uploads.files) {
      const file = await readBlob(f.pathname);
      if (!file) return json({ errors: { files: 'Επιτρέπονται JPG, PNG, WebP και PDF, έως 8 MB ανά αρχείο.' } }, 422);
      attachments.push({ filename: f.name, content: Buffer.from(file.bytes), contentType: file.type });
    }
  } catch {
    return json({ errors: { files: 'Δεν διαβάστηκε το αρχείο. Πρόσθεσέ το ξανά ή στείλε το αίτημα χωρίς συνημμένο.' } }, 422);
  }

  const office = officeEmail(c, ref, uploads.files);
  const to = (process.env.CONTACT_TO_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey || !from || !to.length) {
    if (process.env.NODE_ENV === 'production') return unavailable();
    // Local development without Resend: show what would be sent.
    console.log('[inquiry] Resend not configured, e-mail not sent:\n' + office.subject + '\n' + office.text, attachments.map((a) => `${a.filename} ${a.content.byteLength}B`));
    return json({ ok: true, id: ref }, 201);
  }

  const resend = new Resend(apiKey);
  const sent = await resend.emails.send(
    { from, to, replyTo: c.email || undefined, subject: office.subject, text: office.text, html: office.html, attachments },
    { idempotencyKey: `inquiry/${c.idempotency}` },
  );
  if (sent.error) {
    console.error('[inquiry] office e-mail failed', ref, sent.error.name, sent.error.message);
    return unavailable();
  }

  if (c.email && process.env.CONTACT_CONFIRMATION === 'on') {
    const mail = customerEmail(c, ref);
    const conf = await resend.emails.send(
      { from, to: [c.email], replyTo: to[0], subject: mail.subject, text: mail.text, html: mail.html },
      { idempotencyKey: `confirmation/${c.idempotency}` },
    );
    if (conf.error) console.error('[inquiry] confirmation failed', ref, conf.error.name, conf.error.message);
  }

  if (uploads.files.length) await del(uploads.files.map((f) => f.pathname)).catch(() => {});
  return json({ ok: true, id: ref }, 201);
}
