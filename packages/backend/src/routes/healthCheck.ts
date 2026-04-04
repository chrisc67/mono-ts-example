export const healthCheck = {
  method: "GET",
  url: "/healthcheck",
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          status: { type: "string" },
        },
      },
    },
  },
  handler: async () => {
    return { status: "OK" };
  },
};
