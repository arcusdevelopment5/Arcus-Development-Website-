// Issues short-lived client tokens so the browser can upload attachments straight to
// private Vercel Blob storage (Vercel functions only accept ~4.5 MB request bodies).
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { ALLOWED_FILES, MAX_FILE_BYTES, uploadPrefix } from '../../../lib/inquiry-validation.mjs';
import { json, sameOrigin } from '../../../lib/http';

export async function POST(request: Request) {
  if (!sameOrigin(request)) return json({ error: 'Μη έγκυρη προέλευση αιτήματος.' }, 403);
  if (!process.env.BLOB_READ_WRITE_TOKEN) return json({ error: 'Η αποστολή αρχείων δεν είναι διαθέσιμη. Στείλε το αίτημα χωρίς συνημμένο.' }, 503);
  let body: HandleUploadBody;
  try {
    body = (await request.json()) as HandleUploadBody;
  } catch {
    return json({ error: 'Μη έγκυρο αίτημα.' }, 400);
  }
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const id = String(clientPayload ?? '');
        if (!/^[a-zA-Z0-9-]{16,80}$/.test(id) || !pathname.startsWith(uploadPrefix(id)) || pathname.includes('..')) {
          throw new Error('pathname');
        }
        return {
          allowedContentTypes: Object.keys(ALLOWED_FILES),
          maximumSizeInBytes: MAX_FILE_BYTES,
          addRandomSuffix: true,
          validUntil: Date.now() + 10 * 60 * 1000,
        };
      },
    });
    return json(result);
  } catch {
    return json({ error: 'Επιτρέπονται JPG, PNG, WebP και PDF, έως 8 MB ανά αρχείο.' }, 400);
  }
}
