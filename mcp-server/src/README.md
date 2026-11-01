# MCP server

The MCP implementation is intentionally dependency-free JavaScript (Node.js 18+ for stdio; Cloudflare Workers runtime for HTTP).

## Local stdio

```bash
node src/stdio.js
```

The process accepts one JSON-RPC message per line and responds on stdout. Diagnostics go to stderr. Root `mcp.json` points to this entrypoint.

## Cloudflare Worker

From this directory:

```bash
npm install
npx wrangler login
npx wrangler deploy
```

The Worker exposes `POST /mcp` for JSON-RPC and `GET /health` for a basic health response. After deploy, record the exact URL printed by Wrangler and test both routes. Do not add that URL to a public plugin manifest until the endpoint is verified. Cloudflare account access, deployment, and live endpoint verification have not been performed as part of this source package.

## MCP methods

- `initialize`
- `notifications/initialized` (notification accepted without response)
- `ping`
- `tools/list`
- `tools/call`

Tools:
- `validate_product_brief`
- `validate_production_output`
- `build_production_manifest`

The HTTP handler is stateless and responds with JSON for request/response messages. It does not implement server-sent event streaming, OAuth, persistent sessions, file storage, or image/video rendering. Confirm the target host's accepted Streamable HTTP behavior before using this Worker for public submission; if the host requires additional transport/session features, add them before declaring compatibility.

## Optional GitHub Actions deployment

The repository includes `.github/workflows/deploy-cloudflare.yml`. To use it, add a repository secret named `CLOUDFLARE_API_TOKEN` with the minimum Workers deployment permissions required by your Cloudflare account. Run the workflow manually or push a change under `mcp-server/` to `main`. The workflow does not prove deployment success until its run completes successfully.
