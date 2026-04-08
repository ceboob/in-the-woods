export default {
  async fetch(request) {
    const response = await fetch(request);
    const newHeaders = new Headers(response.headers);

    // Content-Security-Policy
    newHeaders.set(
      "Content-Security-Policy",
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com data:; " +
      "img-src 'self' data: blob: https: http:; " +
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://api.stripe.com https://static.cloudflareinsights.com; " +
      "frame-src https://js.stripe.com https://hooks.stripe.com; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'self'; " +
      "upgrade-insecure-requests"
    );

    // X-Frame-Options
    newHeaders.set("X-Frame-Options", "SAMEORIGIN");

    // Strict-Transport-Security (2 years, includeSubDomains, preload)
    newHeaders.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );

    // X-Content-Type-Options
    newHeaders.set("X-Content-Type-Options", "nosniff");

    // Referrer-Policy
    newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");

    // Permissions-Policy
    newHeaders.set(
      "Permissions-Policy",
      "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(self), usb=()"
    );

    // X-XSS-Protection (legacy browsers)
    newHeaders.set("X-XSS-Protection", "1; mode=block");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
