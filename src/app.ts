import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";
import { requestId } from "hono/request-id";
import { notFound, onError } from "stoker/middlewares";

import { logger } from "./middlewares/pino-logger";

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

const app = new OpenAPIHono<AppBindings>();

app.use(requestId({ generator: () => crypto.randomUUID() }));
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  c.var.logger.info("Error log info.");
  throw new Error("Oh No!");
});

app.notFound(notFound);
app.onError(onError);

export default app;
