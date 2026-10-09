// Cloudflare Worker entry point.
// Static files in ./static are served by the assets layer; only paths listed
// in wrangler.jsonc `assets.run_worker_first` (e.g. /api/*) reach this code.

interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/hello") {
      // Example dynamic endpoint: echo some request info.
      return Response.json({
        hello: "world",
        method: request.method,
        userAgent: request.headers.get("user-agent"),
        // Cloudflare-specific request metadata (country, colo, ...).
        country: request.cf?.country ?? null,
        colo: request.cf?.colo ?? null,
        time: new Date().toISOString(),
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
