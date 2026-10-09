# * Cloudflare Workers (migrating from Deno Deploy)
#
# Config: wrangler.jsonc. Static files: static/ (+ static/_headers).
# Dynamic code: src/index.ts (only paths in assets.run_worker_first).
# Ref: https://developers.cloudflare.com/workers/static-assets/

# Usage: my-make install
install() {
  aube install
}

# Usage: my-make dev   (http://127.0.0.1:8787, reloads on change)
dev() {
  npx wrangler dev --ip 127.0.0.1 --port 8787 $@
}

# Usage: my-make check
check() {
  tsc -p .
  npx wrangler deploy --dry-run
}

# Usage: my-make deploy   (needs `npx wrangler login` once)
deploy() {
  npx wrangler deploy $@
}

# Usage: my-make upgrade
upgrade() {
  aube update --latest
}
