import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Layout from "./components/layout/Layout";
import DashboardOutlet from "./page/Dashboard/dashboardOutlet";
import AdminHome from "./page/Dashboard/adminDashboard/home/adminHome";
import AdminTransaction from "./page/Dashboard/adminDashboard/transactions/adminTransaction";
import FraudAlerts from "./components/adminDashboard/adminHome/fraud";
import AdminCrypto from "./page/Dashboard/adminDashboard/crypto/adminCrypto";
import AdminCompliance from "./page/Dashboard/adminDashboard/compliance/adminCompliance";
import AdminSetting from "./page/Dashboard/adminDashboard/settings/adminSetting";

const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <DashboardOutlet />,
        path: "/",
        children: [
          {
            element: <AdminHome />,
            path: "/admin-home",
          },

          {
            element: <AdminTransaction />,
            path: "/admin-transactions",
          },
          {
            element: <FraudAlerts />,
            path: "/fraud-alerts",
          },
          {
            element: <AdminCrypto />,
            path: "/crypto",
          },
          {
            element: <AdminCompliance />,
            path: "/compliance",
          },
          {
            element: <AdminSetting />,
            path: "/settings",
          },
        ],
      },
    ],
  },
]);

const AppLayout = () => {
  return <RouterProvider router={appRouter} />;
};
export default AppLayout;
