import { renderToReadableStream } from "react-dom/server";
import { stream } from "hono/streaming"
import { Index } from "./src";
import { Hono } from "hono";

console.log("starting server...");


const app = new Hono().basePath("/demos/03-ssr-react");

app.get("/", async (c) => {
    return stream(c, async (stream) => {
        console.log("rendering index")
        const reactReadableStream = await renderToReadableStream(<Index />, {
            bootstrapScripts: ["dist/hydrate.js"],
        });

        await stream.pipe(reactReadableStream)
    })
});

export default app;
