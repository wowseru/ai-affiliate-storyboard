# Release Notes — 0.1.0

## WOWSERU AI AFFILIATE STORYBOARD

Initial development package for creating AI UGC affiliate storyboards and video prompts.

### Included
- Product and USP brief collection.
- Audience and emotional insight analysis.
- Three connected storyboard prompts, each specifying a 2×3 grid of six panels.
- Three connected video prompts with time-coded action and optional narration.
- Character, product, and scene continuity locks.
- Context-aware negative prompt.
- Story summary, production specifications, and checklist.
- MCP tools for brief validation, production-output validation, and production-manifest generation.
- Local stdio MCP entrypoint and Cloudflare Worker HTTP entrypoint.
- Five positive and three negative acceptance scenarios.

### Known limitations
- This package generates production plans and prompts; it does not render images or videos.
- No Cloudflare deployment or public MCP URL is included or claimed.
- The included root `mcp.json` targets the local stdio server for development testing.
- Cloudflare Worker transport is a stateless JSON-RPC HTTP implementation; validate target-host transport/session requirements before public connection.
- Public listing URLs, privacy policy, terms, verified publisher identity, demo recording, and portal attestations must be completed before public submission.
