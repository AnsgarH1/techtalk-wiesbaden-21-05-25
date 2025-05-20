import { OpenAPIHono } from '@hono/zod-openapi'
import notFound from 'stoker/middlewares/not-found'
import onError from 'stoker/middlewares/on-error'
import { swaggerUI } from '@hono/swagger-ui'
import { nearestHandlers } from './routes/handlers'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { cors } from 'hono/cors'

const app = new OpenAPIHono().basePath("/api");



app.use("*", cors())
app.use(trimTrailingSlash())
app.doc("/doc", (c) => ({
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "Restaurant API",
    description: "A simple API for a restaurant",
  },
  servers: [
    {
      url: "https://ansgarhoyer-preview.lunchfinder.ansgar.app",
      description: "Current environment",
    },
  ],
}))

app.get("/", (c) => c.json({
  api_name: "Restaurant API",
  description: "This API returns a list of restaurants around Wiesbaden",
  version: "1.0",
  documentation_url: "/ui",
}))

app.get("/ui", swaggerUI({ url: "/api/doc" }));
app.route("/", nearestHandlers)
app.notFound(notFound)
app.onError(onError)


export default app