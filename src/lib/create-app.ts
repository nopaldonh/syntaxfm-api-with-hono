import { OpenAPIHono } from "@hono/zod-openapi";
import { requestId } from "hono/request-id";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";

import { logger } from "@/middlewares/pino-logger";

import type { AppBindings } from "./types";

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>();
  app.use(serveEmojiFavicon("📝"));
  app.use(requestId({ generator: () => crypto.randomUUID() }));
  app.use(logger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
