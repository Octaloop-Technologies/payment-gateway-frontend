import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import SplineArea from "../../../../charts/splineArea";
import CustomSelect from "../../../../components/shared/select";
import ActiveUserTable from "../../../../components/adminDashboard/adminHome/activeUserTable";

const ActiveUsers = () => {
  const navigate = useNavigate();
  const dateOptions = [
    { value: "Today", label: "Today" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
  ];
  return (
    <>
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
            <p className="large font-bold">Active Users</p>
          </div>

          <div className="w-full bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <p className="medium font-bold">
                Active user trends & engagement
              </p>

              <CustomSelect
                placeholder="Date Range"
                options={dateOptions}
                width={130}
              />
            </div>

            <SplineArea />
          </div>
        </div>
        <div className="">
          <ActiveUserTable />
        </div>
      </div>
    </>
  );
};

export default ActiveUsers;
