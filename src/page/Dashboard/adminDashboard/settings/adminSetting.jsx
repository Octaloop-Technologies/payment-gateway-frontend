import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/shared/button";

const AdminSetting = () => {
  const [currentTab, setCurrentTab] = useState("Security");
  const navigate = useNavigate();
  const onstateClick = (value) => {
    setCurrentTab(value);
  };
  return (
    <>
      <div className="w-full flex flex-col gap-10 ">
        {/* Switcher */}

        {/* tabs */}
        <div className="w-[50%] p-[5px] bg-[#e3ebef] bg-secondary switcher rounded-[10px] flex justify-between shadow-primary">
          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[165px] cursor-pointer ${
              currentTab === "Security"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Security");
            }}
          >
            Security
          </p>

          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[165px]   cursor-pointer ${
              currentTab === "Roles"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Roles");
            }}
          >
            Roles & Permission
          </p>

          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Payment"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Payment");
            }}
          >
            Payment & Transaction
          </p>

          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Notifications"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Notifications");
            }}
          >
            Notifications
          </p>
        </div>

        {/* Switcher Content */}

        <div>
        {currentTab === "Security" && (
          <div className="p-[20px] px-8 flex flex-col">
            <p className="medium font-bold">Security Settings</p>
            <div className="mt-10 flex gap-10 items-center ">
                <p className="large font-medium">Two-Factor Authentication (2FA)</p>
                <Button
               
                  text="Enable"
                  className="bg-primary rounded-lg w-[175px] text-white p-4 small font-semibold"
                />

            </div>

          </div>
        )}
        {currentTab === "Roles" && (
          <div className="p-[20px]">
            <p className="medium font-bold">Roles</p>
          </div>
        )}

        {currentTab === "Payment" && (
          <div className="p-[20px]">
            <p className="medium font-bold">Payment</p>
          </div>
        )}

        {currentTab === "Notifications" && (
          <div className="p-[20px]">
            <p className="medium font-bold">Notifications</p>
          </div>
        )}
        </div>
     
      </div>
    </>
  );
};

export default AdminSetting;
