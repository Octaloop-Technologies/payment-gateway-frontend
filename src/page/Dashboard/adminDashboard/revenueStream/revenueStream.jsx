import React from "react";
import RevenueBreakdown from "../../../../components/adminDashboard/adminRevenue/revenueBreakdown";
import CustomSelect from "../../../../components/shared/select";
import SplineArea from "../../../../charts/splineArea";
import { useNavigate } from "react-router-dom";

const RevenueStream = () => {
  const navigate = useNavigate();
  const dateOptions = [
    { value: "Today", label: "Today" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-[77px] ">
        <div className="">
          <RevenueBreakdown />
        </div>

        <div>
          <div className="w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <p className="medium font-bold">Revenue Trends</p>

              <CustomSelect
                placeholder="Date Range"
                options={dateOptions}
                width={130}
              />
            </div>

            <SplineArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueStream;
