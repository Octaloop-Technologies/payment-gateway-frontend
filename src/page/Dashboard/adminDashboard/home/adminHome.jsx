import React from "react";
import { Icon } from "@iconify/react";
import KeyMetricsCard from "../../../../components/adminDashboard/adminHome/keyMetricsCard";
import keyUser from "../../../../assets/icons/keyUser.svg";
import keyPayouts from "../../../../assets/icons/keyPayouts.svg";
import keyFraud from "../../../../assets/icons/keyAlerts.svg";
import keyActive from "../../../../assets/icons/keyActiveUser.svg";

import CommonTable from "../../../../components/shared/commonTable";
import RecentTransactions from "../../../../components/adminDashboard/adminHome/recentTransactions";
import Fraud from "../../../../components/adminDashboard/adminHome/fraud";

const metricsData = [
  {
    title: "Total Transactions",
    value: "$2,450,000",
    description: " Up This Month",
    percentage: "15% ",
    icon: keyUser,
    icontrend: "ic:baseline-trending-up",
  },
  {
    title: "Total Payouts",
    value: "$780,000",
    description: "Up Processed This Month",
    percentage: "15% ",
    icon: keyPayouts,
    icontrend: "ic:baseline-trending-up",
  },
  {
    title: "Fraud Alerts",
    value: "3",
    description: "Suspicious transactions",
    percentage: "",
    icon: keyFraud,
  },
  {
    title: "Active Users",
    value: "35,000",
    description: "Up from yesterday",
    percentage: "1.8% ",
    icon: keyActive,
    icontrend: "ic:baseline-trending-up",
  },
];

const AdminHome = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="font-bold text-lg">Key Metrics</p>
      <div className="grid grid-cols-4 gap-4">
        {metricsData.map((metric, index) => (
          <KeyMetricsCard key={index} {...metric} />
        ))}
      </div>
      <div>
        <RecentTransactions />
      </div>

      <div>
        <Fraud />
      </div>
    </div>
  );
};

export default AdminHome;
