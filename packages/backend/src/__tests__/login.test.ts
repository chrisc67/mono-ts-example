import { build } from "../app";
import { describe, test, expect} from '@jest/globals';

const baseUrl = "http://sandbox";

const app = build();

describe("/login", () => {
  test("is bad request", async () => {
    const res = await app.inject({
      url: "/login",
      method: "POST"
    });
    expect(res.json()).toEqual({
      code: "FST_ERR_VALIDATION",
      error: "Bad Request",
      message: "body must be object",
      statusCode: 400,
    });
  });

  test("is invalid username/password", async () => {
    const res = await app.inject({
      url: "/login",
      method: "POST",
      body: {username: '', password: ''}
    });
    expect(res.json()).toEqual({
      message: "Invalid UserName or Password",
    });
  });  

  test("is invalid password", async () => {
    const res = await app.inject({
      url: "/login",
      method: "POST",
      body: {username: 'testuser', password: ''}
    });
    expect(res.json()).toEqual({
      message: "Invalid UserName or Password",
    });
  });    

  test("is valid", async () => {
    const res = await app.inject({
      url: "/login",
      method: "POST",
      body: {username: 'testuser', password: 'testuser'}
    });
    expect(res.json().message).toBe("Login Successful");
    expect(res.json().user_id).toBe(2);
  });    
});

