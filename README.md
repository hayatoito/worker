# worker

Static test pages (and small dynamic endpoints) on Cloudflare Workers.

- URL: https://worker.hayatoito.workers.dev/
- Repository: https://github.com/hayatoito/worker
- Docs: https://developers.cloudflare.com/workers/static-assets/

## Layout

- `wrangler.jsonc`: Worker config. `static/` is served as static assets; only
  paths in `assets.run_worker_first` (e.g. `/api/*`) run the Worker code.
- `static/`: test pages. `static/_headers` sets custom response headers (e.g.
  for `.wbn`).
- `src/index.ts`: Worker code (dynamic endpoints such as `/api/hello`).

## Commands

See `Make.zsh`.

```zsh
my-make install   # aube install
my-make dev       # local server on http://127.0.0.1:8787
my-make check     # tsc + wrangler deploy --dry-run
my-make deploy    # needs `npx wrangler login` once
```

## History

Migrated from Deno Deploy (old URL: https://deploy.hayato.deno.net/) in
2026-10, after Deno joined Cloudflare: https://deno.com/blog/cloudflare
