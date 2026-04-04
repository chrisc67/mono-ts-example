import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";

export const hiddenMenudRoutes = {
  path: "/",
  children: [
    { path: "login", element: <Login /> },
    { path: "logout", element: <Logout /> },
  ],
};
