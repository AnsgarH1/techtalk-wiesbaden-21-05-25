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




    const slides = new sst.aws.StaticSite("Slides", {
      path: "slides/",
      build: {
        command: "bun run build",
        output: "dist",
      },
      dev: {
        command: "bun run dev",
      },
      domain: {
        name: "slides.techtalk.ansgar.app",
        dns: sst.cloudflare.dns(),
      },


    });

    const router = new sst.aws.Router("ApiRouter", {
      domain: {
        name: $app.stage === "production"
          ? "api.techtalk.ansgar.app"
          : `${$app.stage}-apitechtalk.ansgar.app`,
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
      domain: {
        name: "demo-01.techtalk.ansgar.app",
        dns: sst.cloudflare.dns(),
      }
    });

    const demo02_vue_spa = new sst.aws.StaticSite("Demo02VuejseSpa", {
      path: "demos/02-vue-spa",
      build: {
        command: "bun run build",
        output: "dist",
      },

      dev: {
        command: "bun run dev",
      },
      domain: {
        name: "demo-02.techtalk.ansgar.app",
        dns: sst.cloudflare.dns(),
      }
    });

  },
});
