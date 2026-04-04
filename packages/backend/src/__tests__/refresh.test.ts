import { build } from "../app";
import { describe, test, expect } from "@jest/globals";

const app = build();
const adminUser = { username: "admin", password: "admin" };

describe("/refresh", () => {
  test("is not authorized", async () => {
    const res = await app.inject({
      url: "/refresh",
      method: "POST",
    });
    expect(res.json().message).toEqual("Not Authorized");
  });

  test("is valid with Admin", async () => {
    const loginResp = await app.inject({
      url: "/login",
      method: "POST",
      body: adminUser,
    });

    const loginBody = loginResp.json();
    const token = loginBody.token;

    const res = await app.inject({
      url: "/refresh",
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    expect(res.json()).toHaveProperty("token");
  });
});
