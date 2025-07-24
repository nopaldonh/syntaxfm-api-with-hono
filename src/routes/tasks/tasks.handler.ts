import type { RouteHandler } from "@hono/zod-openapi";

import type { AppBindings } from "@/lib/types";

import type { ListRoute } from "./tasks.route";

export const list: RouteHandler<ListRoute, AppBindings> = (c) => {
  return c.json([
    {
      name: "Learn Hono",
      done: false,
    },
  ]);
};
