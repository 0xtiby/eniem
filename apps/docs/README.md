# Eniem Docs

Documentation site for [Eniem](https://eniem.dev), built with Next.js 16 and [Fumadocs](https://fumadocs.dev). Deployed at [doc.eniem.dev](https://doc.eniem.dev).

## Development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build
pnpm lint
pnpm types:check
```

## Content

Docs live in `content/docs/` as MDX files. See `source.config.ts` for the frontmatter schema.

## Cloudflare Workers

From the repository root, use Node.js 22.12+ and pnpm:

```bash
./scripts/run_silent "Build documentation Worker" pnpm --filter @eniem/docs build:vinext
pnpm --filter @eniem/docs start:vinext
```

After Cloudflare CLI authentication, set `CLOUDFLARE_ACCOUNT_ID` and run
`pnpm --filter @eniem/docs deploy:vinext`. In CI, provide
`CLOUDFLARE_API_TOKEN` as a secret. `cloudflare.config.ts` defines `eniem-docs`;
`vite.config.ts` compiles Fumadocs MDX for Workers. The original Next.js scripts
remain available. No database or storage binding is required, and the search
API remains server-rendered. Build output is ignored.

The configuration includes the exact production route `docs.eniem.dev/*`,
without changing DNS or the tunnel. Deploy credentials need Workers Scripts
edit, Workers Routes edit, and Zone read permissions.
