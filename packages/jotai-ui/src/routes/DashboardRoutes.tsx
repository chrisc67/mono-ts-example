import { DashboardLayout } from "../layouts/DashboardLayout";
import { Dashboard } from "../pages/Dashboard";
import { Settings } from "../pages/Settings";

export const dashboardRoutes = {
    path: "/dashboard",
    element: (<DashboardLayout />),
    children: [
        { index: true, element: <Dashboard /> },
        { path: "settings", element: <Settings /> },
    ],
};