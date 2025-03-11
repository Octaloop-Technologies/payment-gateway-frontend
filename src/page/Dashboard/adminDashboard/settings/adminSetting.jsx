import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/shared/button";
import Input from "../../../../components/shared/input";
import Enable2Factor from "../../../../components/modals/enable2Factor";
import UpdatePass from "../../../../components/modals/updatePass";
import Roles from "../../../../components/adminDashboard/adminSetting/roles";
import UpdatePayment from "../../../../components/modals/updatePayment";
import { Switch } from "antd";

const AdminSetting = () => {
  const [currentTab, setCurrentTab] = useState("Security");
  const [isEnable, setIsEnable] = useState(false);
  const [isUpdatePass, setIsUpdatePass] = useState(false);
  const [isUpdatePayment, setIsUpdatePayment] = useState(false);
  const navigate = useNavigate();

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onstateClick = (value) => {
    setCurrentTab(value);
  };
  return (
    <>
      <div className="w-full flex flex-col gap-10 ">
        {/* Switcher */}

        {/* tabs */}
        <div className="w-fit p-[5px] bg-[#e3ebef] bg-secondary switcher rounded-[10px] flex justify-between shadow-primary">
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
              <div className="mt-10 flex gap-10 items-center pb-5 bprder-solid border-b-[1px] border-b-[gainsboro]">
                <p className="large font-medium">
                  Two-Factor Authentication (2FA)
                </p>
                <Button
                  onClick={() => setIsEnable(true)}
                  text="Enable"
                  className="bg-primary rounded-lg w-[175px] text-white h-[43px] small font-semibold"
                />
              </div>

              <div className="mt-10 flex flex-col gap-3.5 pb-5 bprder-solid border-b-[1px] border-b-[gainsboro]">
                <p className="large font-medium">Current Password</p>

                <div className="flex gap-2 items-end">
                  <Input
                    type="password"
                    label="Password"
                    wrapperClass="w-[316px]"
                    placeholder="Enter Password"
                    icon={true}
                  />
                  <Button
                    onClick={() => setIsUpdatePass(true)}
                    text="Chnage Password"
                    className="bg-primary rounded-lg w-[175px] text-white h-[43px] small font-semibold"
                  />
                </div>
              </div>
            </div>
          )}
          {currentTab === "Roles" && (
            <div className="">
              <Roles />
            </div>
          )}

          {currentTab === "Payment" && (
            <div className="p-[20px] flex flex-col gap-[38px]">
              <p className="medium font-bold">Payment & Transaction Settings</p>

              <div className="grid grid-cols-2 gap-8">
                <Input
                  type="text"
                  label="Default Payment Gateway"
                  wrapperClass="w-[100%]"
                  placeholder="Stripe"
                  className="w-full"
                />

                <Input
                  type="text"
                  label="Processing Fee (Fiat)"
                  wrapperClass="w-[100%]"
                  placeholder="2.5%"
                  className="w-full"
                />

                <Input
                  type="text"
                  label="Processing Fee (Crypto)"
                  wrapperClass="w-[100%]"
                  placeholder="1%"
                  className="w-full"
                />

                <Input
                  type="text"
                  label="Minimum Withdrawal Limit"
                  wrapperClass="w-[100%]"
                  placeholder="$10"
                  className="w-full"
                />

                <Input
                  type="text"
                  label="Refund Policy"
                  wrapperClass="w-[100%]"
                  placeholder="7 days"
                  className="w-full"
                />
              </div>

              <Button
                onClick={() => setIsUpdatePayment(true)}
                text="Edit"
                className="bg-primary rounded-lg w-[175px] text-white h-[43px] small font-semibold"
              />
            </div>
          )}

          {currentTab === "Notifications" && (
            <div className=" px-[20px] flex flex-col gap-[35px]">
              <p className="medium font-bold">Notifications</p>

              <div className="w-[650px] rounded-[10px]">
                <div className="py-3 px-6 w-full rounded-solid rounded-t-xl  flex justify-between bg-[#deebf1]">
                  <p className="text-primary small font-bold">
                    Notification Type
                  </p>
                  <p className="text-primary small font-bold">
                    View Transactions
                  </p>
                </div>

                <div className="w-full p-6 flex justify-between border-solid border-b-[1px] border-b-[gainsboro]">
                  <p className="small font-normal">Payment Success Email</p>
                  <Switch defaultChecked onChange={onChange} />
                </div>

                <div className="w-full p-6 flex justify-between border-solid border-b-[1px] border-b-[gainsboro]">
                  <p className="small font-normal">New User Signup Alert</p>
                  <Switch defaultChecked onChange={onChange} />
                </div>

                <div className="w-full p-6 flex justify-between border-solid border-b-[1px] border-b-[gainsboro]">
                  <p className="small font-normal">Fraud Detection Alert</p>
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Enable2Factor isEnable={isEnable} setIsEnable={setIsEnable} />
      <UpdatePass
        isUpdatePass={isUpdatePass}
        setIsUpdatePass={setIsUpdatePass}
      />

      <UpdatePayment
        isUpdatePayment={isUpdatePayment}
        setIsUpdatePayment={setIsUpdatePayment}
      />
    </>
  );
};

export default AdminSetting;
