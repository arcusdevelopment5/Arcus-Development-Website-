// Bundled by `npm run build:client` into public/blob-upload.js (loaded only when a visitor
// attaches files). Uploads straight to private Vercel Blob storage.
import { upload } from '@vercel/blob/client';

export async function uploadFiles(files: File[], idempotency: string) {
  const out: { pathname: string; name: string }[] = [];
  for (const file of files) {
    const safe = file.name.normalize('NFKD').replace(/[^\w.-]+/g, '-').replace(/-+/g, '-').slice(-80) || 'file';
    const blob = await upload(`inquiries/${idempotency}/${safe}`, file, {
      access: 'private',
      handleUploadUrl: '/api/uploads',
      clientPayload: idempotency,
      contentType: file.type,
    });
    out.push({ pathname: blob.pathname, name: file.name });
  }
  return out;
}
