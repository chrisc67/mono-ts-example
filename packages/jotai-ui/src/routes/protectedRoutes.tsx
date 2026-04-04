import { DefaultLayout } from "../layouts/DefaultLayout";
import { Settings } from "../pages/Settings";
import { Profile } from "../pages/Profile";
import { Order } from "../pages/Orders";
import { Product } from "../pages/Product";
import { Admin } from "../pages/Admin";
import { Cart } from "../pages/Cart";

export const protectedRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    { path: "settings", element: <Settings /> },
    { path: "profile", element: <Profile /> },
    { path: "products", element: <Product /> },
    { path: "orders", element: <Order /> },
    { path: "admin", element: <Admin /> },
    { path: "cart", element: <Cart /> },
  ],
};
