export const productSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    description: { type: "string" },
    category: { type: "string" },
    price: { type: "number" },
    created_at: { type: "string", format: "date-time" },
    modified_at: { type: "string", format: "date-time" },
  },
} as const;

export const productListSchema = {
  type: "object",
  properties: {
    products: {
      type: "array",
      items: productSchema,
    },
  },
} as const;
