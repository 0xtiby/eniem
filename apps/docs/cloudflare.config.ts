import { bindings, defineConfig, defineWorker, triggers } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "eniem-docs",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-26",
    triggers: [triggers.fetch({ pattern: "docs.eniem.dev/*", zone: "eniem.dev" })],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
    },
  }),
});
