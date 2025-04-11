import { Hono } from 'hono';

interface Env {
  AI: Ai;
}

const app = new Hono<{ Bindings: Env }>();

// Test endpoint
app.get('/test', (c) => {
  return c.text('Test endpoint is working!');
});

// AI endpoint
app.post('/', async (c) => {
  const response = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
    prompt: "What is the origin of the phrase 'Hello, World'?",
  });

  return c.json(response);
});

export default app;