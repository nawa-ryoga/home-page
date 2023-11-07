build:
	pnpx @cloudflare/next-on-pages@1

json:
	pnpm run build:json

up:
	pnpm run dev

kv:
	pnpm run dev:wrangler

lint:
	pnpm run lint

format:
	pnpm run format