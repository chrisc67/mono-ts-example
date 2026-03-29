import { useRoutes } from "react-router";
import { dashboardRoutes } from "./DashboardRoutes";

export const AppRoutes = () =>  {
  // Combine route configs from multiple files
  const routes = useRoutes([dashboardRoutes]);
  return routes;
}