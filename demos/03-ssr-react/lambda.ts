import { streamHandle } from "hono/aws-lambda";
import app from "./server";

export const handler = streamHandle(app)