declare namespace Cloudflare {
  interface Env {
    ADMIN_EMAILS?: string;
    CRM_WEBHOOK_URL?: string;
    CRM_WEBHOOK_TOKEN?: string;
    DB?: D1Database;
    BUCKET?: R2Bucket;
  }
}
