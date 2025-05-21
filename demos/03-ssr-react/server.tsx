import { serve } from "bun";

import { renderToReadableStream } from "react-dom/server";
import { Index } from "./src";

Bun.build({ entrypoints: [import.meta.dir + "/hydrate.tsx"], outdir: "dist" });

const server = serve({
  routes: {
    "/": async () => {
      const stream = await renderToReadableStream(<Index />, {
        bootstrapScripts: ["/hydrate.js"],
      });

      return new Response(stream, {
        headers: { "Content-Type": "text/html" },
      });
    },
    "/hydrate.js": async () => {
      console.log("Serving hydrate.js");
      return new Response(Bun.file("dist/hydrate.js"));
    },
  },

  development: true,
});

console.log(`🚀 Server running at ${server.url}`);