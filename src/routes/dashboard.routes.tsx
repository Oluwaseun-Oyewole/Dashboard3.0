import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Routes } from "./routes";

export const Dashboard = lazy(() => import("../views/dashboard"));
export const Report = lazy(() => import("../views/reports"));
// all dashboard related routes

export const dashboardRoutes = () => {
  return [
    {
      id: 1,
      path: Routes.dashboard,
      element: <Dashboard />,
    },

    {
      id: 2,
      path: Routes.report,
      element: <Report />,
    },

    { path: "/app", element: <Navigate to={Routes.dashboard} replace /> },
  ] as RouteObject[];
};
