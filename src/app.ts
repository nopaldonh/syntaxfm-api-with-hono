import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError } from "stoker/middlewares";

import { logger } from "./middlewares/pino-logger";

const app = new OpenAPIHono();

app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.notFound(notFound);
app.onError(onError);

export default app;
