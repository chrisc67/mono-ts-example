export const loginSchema = {
  type: "object",
  properties: {
    username: { type: "string", maxLength: 20 },
    password: { type: "string", maxLength: 20 },
  },
  required: ["username", "password"],
} as const;

export const loginRespSchema = {
  type: "object",
  properties: {
    message: { type: "string" },
    token: { type: "string" },
    user_id: { type: "number" },
  },
} as const;
