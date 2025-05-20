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


    const slidesRouter = new sst.aws.Router("SlidesRouter", {
      domain: {
        name: $app.stage === "production"
          ? "techtalk-slides.ansgar.app"
          : `${$app.stage}-preview-techtalk-slides.ansgar.app`,
        dns: sst.cloudflare.dns(),
      },
    });

    const slides = new sst.aws.StaticSite("Slides", {
      path: "slides",
      build: {
        command: "bun run build:slides",
        output: "slides/dist",
      },
      dev: {
        command: "bun run dev:slides",
      },
      router: {
        instance: slidesRouter,
        path: "/",
      }
    });

    const router = new sst.aws.Router("LunchfinderRouter", {
      domain: {
        name: $app.stage === "production"
          ? "lunchfinder.ansgar.app"
          : `${$app.stage}-preview.lunchfinder.ansgar.app`,
        dns: sst.cloudflare.dns(),
      },
    });
    const api = new sst.aws.Function("LunchFinderApi", {
      handler: "packages/api/src/index.handler",
      url: {
        router: {
          instance: router,
          path: "/api",
        },
      },

    });


    const demo01_vanilla_js = new sst.aws.StaticSite("Demo01VanillaJs", {
      path: "demos/01-vanilla-js",
      router: {
        instance: router,
        path: "/",
      }
    });

    const demo02_vue_spa = new sst.aws.StaticSite("Demo02VuejseSpa", {
      path: "demos/02-vue-spa",
      build: {
        command: "bun run build:vue",
        output: "demos/02-vue-spa/dist",
      },
      
      dev: {
        command: "bun run dev:vue",
      },
      router: {
        instance: router,
        path: "/demos/02-vue-spa",
      }
    });

  },
});
