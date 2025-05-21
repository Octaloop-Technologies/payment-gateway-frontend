
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
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
import Login from "./page/account/login";
import ResetPassword from "./page/account/resetPassword";
import Verify from "./page/account/verify";
import CreateNewPass from "./page/account/createNewPass";
import TotalTransaction from "./page/Dashboard/adminDashboard/home/totalTransaction";
import TotalPayouts from "./page/Dashboard/adminDashboard/home/totalPayouts";
import HomeFraud from "./page/Dashboard/adminDashboard/home/homeFraud";
import ActiveUsers from "./page/Dashboard/adminDashboard/home/activeUsers";
import RevenueStream from "./page/Dashboard/adminDashboard/revenueStream/revenueStream";
import ProfileSetting from "./page/Dashboard/adminDashboard/settings/profileSetting";

const appRouter = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <ResetPassword />,
    path: "/reset-password",
  },
  {
    element: <Verify />,
    path: "/verify",
  },
  {
    element: <CreateNewPass />,
    path: "/set-new-password",
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      // Redirect "/" to "/admin-home"
      {
        index: true,
        element: <Navigate to="/admin-home" replace />,
      },
      {
        element: <DashboardOutlet />,
        path: "admin-home",
        children: [
          {
            index: true, 
            element: <AdminHome />,
          },
        ],
      },
      {
        element: <TotalTransaction />,
        path: "total-transaction",
      },
      {
        element: <TotalPayouts />,
        path: "total-payouts",
      },
      {
        element: <HomeFraud />,
        path: "total-fraud",
      },
      {
        element: <ActiveUsers />,
        path: "active-users",
      },
      {
        element: <AdminTransaction />,
        path: "admin-transactions",
      },
      {
        element: <FraudAlerts />,
        path: "fraud-alerts",
      },
      {
        element: <AdminCrypto />,
        path: "crypto",
      },
      {
        element: <AdminCompliance />,
        path: "compliance",
      },
      {
        element: <AdminSetting />,
        path: "settings",
      },
      {
        element: <ProfileSetting />,
        path: "profile-setting",
      },
      {
        element: <RevenueStream />,
        path: "revenue-stream",
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppLayout = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppLayout;
