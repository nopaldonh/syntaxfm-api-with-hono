import { serve } from "@hono/node-server";
import { OpenAPIHono } from "@hono/zod-openapi";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve({
  fetch: app.fetch,
  port: 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
