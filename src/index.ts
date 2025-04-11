export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("Test endpoint is working!");
  },
};