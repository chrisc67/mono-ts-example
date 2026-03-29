import { build } from "../app";

const baseUrl = "http://sandbox";

const app = build();
const adminUser = {username: 'admin', password: 'admin'};
const testUser = {username: 'testuser', password: 'testuser'}

describe("/users", () => {
  test("is not authorized", async () => {
    const res = await app.inject({
      url: "/api/users",
      method: "GET"
    });
    expect(res.json().message).toEqual("Not Authorized");
  });

  test("is valid with Admin", async () => {
    const loginResp = await app.inject({
      url: "/login",
      method: "POST",
      body: adminUser
    });

    const loginBody = loginResp.json();
    const token = loginBody.token;

    const res = await app.inject({
      url: "/api/users",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const users = res.json().users;

    expect(users.length > 0).toBe(true);
    expect(users[0].user_id).toBe(1);
  }); 

  test("is valid with TestUser", async () => {
    const loginResp = await app.inject({
      url: "/login",
      method: "POST",
      body: testUser
    });

    const loginBody = loginResp.json();
    const token = loginBody.token;

    const res = await app.inject({
      url: "/api/users",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`
      }
    });
    const users = res.json().users;

    expect(users.length > 0).toBe(true);
    expect(users[0].user_id).toBe(2);
  });   

  test("not authorized with TestUser", async () => {
    const loginResp = await app.inject({
      url: "/login",
      method: "POST",
      body: testUser
    });

    const loginBody = loginResp.json();
    const token = loginBody.token;

    const res = await app.inject({
      url: "/api/users/1",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    expect(res.json().message).toBe("Not Authorized");

  }); 

  test("is valid with TestUser", async () => {
    const loginResp = await app.inject({
      url: "/login",
      method: "POST",
      body: testUser
    });

    const loginBody = loginResp.json();
    const token = loginBody.token;

    const res = await app.inject({
      url: "/api/users/2",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    expect(res.json().user_id).toBe(2);
  });       
});
