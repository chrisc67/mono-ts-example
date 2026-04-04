import { useRoutes } from "react-router";
import { mainRoutes } from "./mainRoutes";
import { protectedRoutes } from "./protectedRoutes";
import { hiddenMenudRoutes } from "./hiddenMenuRoutes";

export const AppRoutes = () => {
  // Combine route configs from multiple files
  const routes = useRoutes([mainRoutes, protectedRoutes, hiddenMenudRoutes]);
  return routes;
};
