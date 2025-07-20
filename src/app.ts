import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound } from "stoker/middlewares";

const app = new OpenAPIHono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.notFound(notFound);

export default app;
