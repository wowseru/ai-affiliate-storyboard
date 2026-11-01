# Reviewer Guide

## Local package test

1. Install Node.js 18 or later.
2. Open a terminal in `mcp-server/`.
3. Run `npm test`.
4. Run `npm start` to start the local stdio MCP process (it waits for JSON-RPC input).
5. In a compatible plugin host, import the package and allow its root `mcp.json` to launch the local server.
6. Verify the three tools are discoverable and callable.

## Conversational test

Use the five positive and three negative cases in `tests/`. Record actual results and environment details separately. Do not mark a test passed until it has been executed.

## Deployment test

Cloudflare deployment requires the publisher's Cloudflare account. Follow `mcp-server/README.md`, record the deployed Worker URL, and test `/health` and `/mcp`. Verify protocol compatibility with the target host before changing the package's MCP configuration.
