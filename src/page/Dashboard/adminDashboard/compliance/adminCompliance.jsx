import React, { useState } from "react";
import Button from "../../../../components/shared/button";
import KeyMetricsCard from "../../../../components/adminDashboard/adminHome/keyMetricsCard";
import keyUser from "../../../../assets/icons/keyUser.svg";
import keyPayouts from "../../../../assets/icons/keyPayouts.svg";
import keyFraud from "../../../../assets/icons/keyAlerts.svg";
import keyActive from "../../../../assets/icons/keyActiveUser.svg";
import TaxReported from "../../../../components/adminDashboard/adminCompliance/taxReported";
import UserMonitoring from "../../../../components/adminDashboard/adminCompliance/userMonitoring";
import KycCompliance from "../../../../components/adminDashboard/adminCompliance/kycCompliance";
import TaxableTransaction from "../../../../components/adminDashboard/adminCompliance/taxableTransaction";
import GenerateReport from "../../../../components/modals/generateReport";
const AdminCompliance = () => {
  const [isGenerateReport, setIsGenerateReport] = useState(false);
  const metricsData = [
    {
      title: "Total Revenue",
      value: "$1,200,000",
      icon: keyUser,
    },
    {
      title: " Taxable Transactions",
      value: "$980,000",
      icon: keyPayouts,
    },
    {
      title: "Tax Collected",
      value: "$85,000",

      icon: keyFraud,
    },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex justify-between ">
          <p className="font-bold text-base"> Financial Reports Overview</p>
          <Button onClick={(()=>setIsGenerateReport(true))}
            text="Generate New Report"
            className="bg-primary rounded-lg w-[208px] text-white p-3 small font-semibold"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {metricsData.map((metric, index) => (
            <KeyMetricsCard key={index} {...metric} />
          ))}
        </div>

        <TaxReported />

        <UserMonitoring />

        <KycCompliance />
        <TaxableTransaction />
      </div>

      <GenerateReport
        isGenerateReport={isGenerateReport}
        setIsGenerateReport={setIsGenerateReport}
      />
    </>
  );
};

export default AdminCompliance;
