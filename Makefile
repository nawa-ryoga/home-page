build:
	pnpx @cloudflare/next-on-pages@1

data:
	pnpm run build

up:
	pnpm run dev