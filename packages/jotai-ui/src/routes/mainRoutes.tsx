import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const mainRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "about", element: <About /> },
  ],
};
