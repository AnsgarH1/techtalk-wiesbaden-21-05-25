import { z } from '@hono/zod-openapi'

export const RestaurantAddressSchema = z.object({
  street: z.string().optional(),
  housenumber: z.string().optional(),
  postcode: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  place: z.string().optional(),
  housename: z.string().optional(),
}).openapi('RestaurantAddress');

export const RestaurantContactSchema = z.object({
  phone: z.string().optional(),
  email: z.string().optional(),
  website: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  twitter: z.string().optional(),
  fax: z.string().optional(),
}).openapi('RestaurantContact');

export const RestaurantOpeningHoursSchema = z.object({
  raw: z.string().optional(),
  signed: z.boolean().optional(),
}).openapi('RestaurantOpeningHours');

export const RestaurantDietSchema = z.object({
  vegan: z.union([z.boolean(), z.string()]).optional(),
  vegetarian: z.union([z.boolean(), z.string()]).optional(),
}).openapi('RestaurantDiet');

export const RestaurantPaymentSchema = z.object({
  cash: z.boolean().optional(),
  creditCards: z.boolean().optional(),
  debitCards: z.boolean().optional(),
}).openapi('RestaurantPayment');

export const RestaurantSchema = z.object({
  id: z.number(),
  name: z.string(),
  cuisine: z.array(z.string()).optional(),
  address: RestaurantAddressSchema.optional(),
  contact: RestaurantContactSchema.optional(),
  openingHours: RestaurantOpeningHoursSchema.optional(),
  indoorSeating: z.boolean().optional(),
  outdoorSeating: z.boolean().optional(),
  wheelchair: z.enum(["yes", "no", "limited"]).optional(),
  wheelchairDescription: z.string().optional(),
  toiletsWheelchair: z.enum(["yes", "no"]).optional(),
  diet: RestaurantDietSchema.optional(),
  delivery: z.union([z.boolean(), z.literal("only")]).optional(),
  takeaway: z.boolean().optional(),
  smoking: z.enum(["yes", "no", "outside"]).optional(),
  payment: RestaurantPaymentSchema.optional(),
  brand: z.string().optional(),
  operator: z.string().optional(),
  description: z.string().optional(),
  reservation: z.boolean().optional(),
  capacity: z.number().optional(),
  internetAccess: z.string().optional(),
  level: z.string().optional(),
  lat: z.number(),
  lon: z.number(),
  tags: z.record(z.string(), z.string()).optional(),
}).openapi('Restaurant');

export const RestaurantWithDistanceSchema = RestaurantSchema.extend({
  distance: z.number(),
}).openapi('RestaurantWithDistance');

export type RestaurantAddress = z.infer<typeof RestaurantAddressSchema>;
export type RestaurantContact = z.infer<typeof RestaurantContactSchema>;
export type RestaurantOpeningHours = z.infer<typeof RestaurantOpeningHoursSchema>;
export type RestaurantDiet = z.infer<typeof RestaurantDietSchema>;
export type RestaurantPayment = z.infer<typeof RestaurantPaymentSchema>;
export type Restaurant = z.infer<typeof RestaurantSchema>;
export type RestaurantWithDistance = z.infer<typeof RestaurantWithDistanceSchema>;
  