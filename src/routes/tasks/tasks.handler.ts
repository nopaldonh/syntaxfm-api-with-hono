import type { RouteHandler } from "@hono/zod-openapi";

import type { ListRoute } from "./tasks.route";

export const list: RouteHandler<ListRoute> = (c) => {
  return c.json([
    {
      name: "Learn Hono",
      done: false,
    },
  ]);
};
