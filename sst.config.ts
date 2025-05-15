/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "techtalk-wiesbaden-21-05-25",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { cloudflare: "6.1.2" },
    };
  },
  async run() {

    const gmapsApiKey = new sst.Secret("MAPS_PLATFORM_API_KEY")

    const router = new sst.aws.Router("LunchfinderRouter", {
      domain: {
        name:  $app.stage === "production"
        ? "lunchfinder.ansgar.app"
        : `${$app.stage}-preview.lunchfinder.ansgar.app`,
        dns: sst.cloudflare.dns(),
      },
    });
    const api = new sst.aws.Function("LunchFinderApi", {
      handler: "demos/backend/src/index.handler",
      url: {
        router: {
          instance: router,
          path: "/api",
        },
      },
      link: [gmapsApiKey]
    });
  },
});
