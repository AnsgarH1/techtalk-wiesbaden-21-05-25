import * as HttpStatusCodes from "stoker/http-status-codes";
import { findNearestRestaurants } from "../services/geoService";

import { nearestRoute} from "./routes";
import { OpenAPIHono } from "@hono/zod-openapi";
import { restaurants } from "../data/restaurants";


export const nearestHandlers = new OpenAPIHono()

nearestHandlers.openapi(nearestRoute, async (c) => {
    const { lat, lon, count } = c.req.valid("query");

    const nearest = findNearestRestaurants(lat, lon, restaurants, count);
    await new Promise(resolve => setTimeout(resolve, 100));
    return c.json(nearest, HttpStatusCodes.OK);
}); 

