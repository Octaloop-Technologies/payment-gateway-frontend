import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import FraudDetector from "../../../../components/adminDashboard/adminHome/fraudDetector";
import FraudRefund from "../../../../components/adminDashboard/adminHome/fraudRefund";
import { useNavigate } from "react-router-dom";

const HomeFraud = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-[77px] ">
      <div className="w-full flex flex-col gap-[33px]">
        <div className="flex gap-2 items-center">
          <Icon
            icon="eva:arrow-back-outline"
            width="24"
            height="24"
            style={{ color: "#000" }}
            onClick={() => navigate("/admin-home")}
            className="cursor-pointer"
          />
          <p className="large font-bold">Fraud Alerts</p>
        </div>

        <div>
          <FraudDetector />
        </div>

        <div>
          <FraudRefund />
        </div>
      </div>
    </div>
  );
};

export default HomeFraud;
