import createApp from "@/lib/create-app";

const app = createApp();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("Error log info.");
  throw new Error("Oh No!");
});

export default app;
