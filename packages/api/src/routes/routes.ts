import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { RestaurantWithDistanceSchema } from "../schemas/restaurant";




const tags = ["Restaurants"];



const querySchema = z.object({
    lat: z.coerce.number().min(-90).max(90).openapi({ example: 50.07987584765022 }),
    lon: z.coerce.number().min(-180).max(180).openapi({ example: 8.246403608947869 }),
    count: z.coerce.number().optional().openapi({ example: 10 }).default(10),
})

export const nearestRoute = createRoute({
    path: "/nearest",
    method: "get",
    request: {
        query: querySchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(
            RestaurantWithDistanceSchema.array(),
            "The nearest restaurants"
        ),
        [HttpStatusCodes.BAD_REQUEST]: jsonContent(
            z.object({ error: z.string() }),
            "Missing or invalid lat/lon"
        ),
    },
}); 
