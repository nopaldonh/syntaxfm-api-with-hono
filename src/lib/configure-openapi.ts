import type { AppOpenAPI } from "./types";

import PackageJSON from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: PackageJSON.version,
      title: "Tasks API",
    },
  });
}
