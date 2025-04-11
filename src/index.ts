export interface Env {
  AI: Ai;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const userMessage = await request.text();

    const response = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      prompt: userMessage,
    });

    return new Response(JSON.stringify(response));
  },
} satisfies ExportedHandler<Env>;