import { apiReference } from "@scalar/hono-api-reference";

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

  app.get("/reference", apiReference({
    theme: "kepler",
    layout: "classic",
    defaultHttpClient: {
      targetKey: "js",
      clientKey: "fetch",
    },
    spec: {
      url: "/doc",
    },
  }));
}
