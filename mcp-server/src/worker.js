
import { handleRpc } from './core.js';

const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store'
};

const OPENAI_APPS_CHALLENGE =
  'gKMWMV-1bHanRjiUVfLPJ0bW4PixPAl6yULnoWOCFg8';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // OpenAI domain verification
    if (url.pathname === '/.well-known/openai-apps-challenge') {
      return new Response(OPENAI_APPS_CHALLENGE, {
        status: 200,
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'cache-control': 'no-store'
        }
      });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(
        JSON.stringify({
          status: 'ok',
          service: 'wowseru-ai-affiliate-storyboard-mcp'
        }),
        { headers: JSON_HEADERS }
      );
    }

    // MCP endpoint
    if (url.pathname !== '/mcp') {
      return new Response('Not found', { status: 404 });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: { allow: 'POST' }
      });
    }

    const contentType = request.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      return new Response('Expected application/json', {
        status: 415
      });
    }

    let message;

    try {
      message = await request.json();
    } catch {
      return new Response(
        JSON.stringify({
          jsonrpc: '2.0',
          id: null,
          error: {
            code: -32700,
            message: 'Parse error'
          }
        }),
        {
          status: 400,
          headers: JSON_HEADERS
        }
      );
    }

    const response = await handleRpc(message);

    if (response === null || message.id === undefined) {
      return new Response(null, { status: 202 });
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: JSON_HEADERS
    });
  }
};
