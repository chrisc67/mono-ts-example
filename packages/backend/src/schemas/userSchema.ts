export const userSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
    username: { type: "string" },
    first_name: { type: "string" },
    last_name: { type: "string" },
    email: { type: "string" },
    created_at: { type: "string", format: "date-time" },
    is_admin: { type: "boolean" },
  },
} as const;

export const userListSchema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      items: { userSchema },
    },
  },
} as const;
