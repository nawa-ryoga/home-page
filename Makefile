build:
	pnpx @cloudflare/next-on-pages@1

json:
	pnpm run build:json

up:
	pnpm run dev

lint:
	pnpm run lint

format:
	pnpm run format