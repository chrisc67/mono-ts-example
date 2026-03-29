export const userSchema = {
  type: "object",
  properties: {
    user_id: { type: "number" },
    username: { type: "string" },
    first_name: { type: "string" },
    last_name: { type: "string" },
    email: { type: "string" },
    is_admin: { type: "boolean" },
  },
} as const;

export const userListSchema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      items: {
        type: "object",
        properties: {
          user_id: { type: "number" },
          username: { type: "string" },
          first_name: { type: "string" },
          last_name: { type: "string" },
          email: { type: "string" },
          is_admin: { type: "boolean" },
        },
      },
    },
  },
} as const;
