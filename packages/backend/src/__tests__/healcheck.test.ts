import { build } from "../app";
import { describe, test, expect } from "@jest/globals";

const app = build();

describe("/healthcheck", () => {
  test("is successful", async () => {
    const res = await app.inject({
      url: "/healthcheck",
      method: "GET",
    });
    expect(res.json()).toEqual({ status: "OK" });
  });
});
