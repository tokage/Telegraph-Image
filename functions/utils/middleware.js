// Telemetry / Sentry has been removed from this fork.
//
// The original implementation hard-coded an upstream Sentry DSN and exported
// every visitor's request headers, Cloudflare `cf` metadata, URL and method to a
// third-party Sentry project, plus fetched a remote sample rate from a
// pages.dev domain. That phone-home behaviour is gone.
//
// These exports are kept as harmless pass-throughs so existing importers
// (functions/upload.js, functions/api/_middleware.js, functions/file/_middleware.js)
// keep working without modification.

export async function errorHandling(context) {
  return context.next();
}

export function telemetryData(context) {
  return context.next();
}

export async function traceData() {
  // no-op
}
