import { serve } from "@hono/node-server";

import app from "./app";

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
}, (info) => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${info.port}`);
});
