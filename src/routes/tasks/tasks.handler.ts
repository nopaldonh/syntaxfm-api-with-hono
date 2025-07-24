import type { AppRouteHandler } from "@/lib/types";

import type { ListRoute } from "./tasks.route";

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json([
    {
      name: "Learn Hono",
      done: false,
    },
  ]);
};
