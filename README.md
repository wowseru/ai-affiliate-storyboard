# WOWSERU AI AFFILIATE STORYBOARD

Independent plugin project by **WOWSERU**.

This package converts product briefs into an AI UGC affiliate production plan. It is separate from WOWSERU AI ANIMASI and contains no animation-plugin workflow.

## Package contents

- `plugin.json` — Agent Plugins 1.0 manifest and listing metadata.
- `mcp.json` — local stdio MCP connection for package-level testing.
- `skills/ai-affiliate-storyboard/SKILL.md` — core workflow instructions.
- `mcp-server/` — dependency-free MCP server implementation with stdio and Cloudflare Worker entrypoints.
- `tests/` — five positive and three negative test cases.
- `submission/` — draft release notes and reviewer materials.

## Local MCP test

Requirements: Node.js 18 or later.

```bash
node mcp-server/src/stdio.js
```

The process speaks MCP JSON-RPC over stdio. In a compatible host, import the package and use its root `mcp.json`.

## Cloudflare deployment

The Worker entrypoint is `mcp-server/src/worker.js`; Wrangler configuration is in `mcp-server/wrangler.toml`. Deploy only after choosing a Cloudflare account and running the deployment commands in `mcp-server/README.md`.

**Important:** `mcp.json` intentionally points to the local stdio server for portable local testing. No public Cloudflare URL is claimed or fabricated. After deployment is verified, update the public-distribution copy of `mcp.json` to the actual HTTPS `/mcp` endpoint.

## Scope and limitations

The plugin produces prompts and structured production plans. It does not itself render images or videos, access product links without an enabled browsing capability, or verify product claims beyond supplied/retrieved evidence.
