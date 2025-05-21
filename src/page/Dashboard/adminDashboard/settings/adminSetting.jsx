import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/shared/button";
import Input from "../../../../components/shared/input";
import Enable2Factor from "../../../../components/modals/enable2Factor";
import UpdatePass from "../../../../components/modals/updatePass";
import Roles from "../../../../components/adminDashboard/adminSetting/roles";
import UpdatePayment from "../../../../components/modals/updatePayment";
import { Switch } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomSelect from "../../../../components/shared/select";
import AddAdminTable from "./addAdminTable";
import RolebasedTable from "./rolebasedTable";
import ActivitylogTable from "./activitylogTable";
import TransactionLogTable from "./transactionLogTable";
import CurrencyTable from "./currencyTable";


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

  const TimezoneOptions = [
    { value: "gmt-(utc)", label: "GMT-O(UTC)" },
    { value: "gmt-o", label: "GMT-O to GMT+14" },
    { value: "gmt-1", label: "GMT-1 to GMT+12" },
  ];
  const DateOptions = [{ value: "date", label: "DD/MM/YYYY+14" }];

  const CurrencyOptions = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "Eur" },
    { value: "btc", label: "BTC" },
    { value: "eth", label: "ETH" },
    { value: "sol", label: "SOL" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-10 ">
        <div className="flex  gap-2 items-center">
          <Icon
            icon="eva:arrow-back-outline"
            width="24"
            height="24"
            style={{ color: "#000" }}
            onClick={() => navigate("/admin-home")}
            className="cursor-pointer"
          />
          <p className="large font-bold">Settings</p>
        </div>
        {/* Switcher */}

        {/* tabs */}
        <div className="w-fit p-[5px] bg-[#e3ebef] bg-secondary switcher rounded-[10px] flex   justify-center   flex-wrap md:justify-between shadow-primary">
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

          {/* <p
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
          </p> */}

          {/* <p
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
          </p> */}

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

          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Currency"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Currency");
            }}
          >
            Currency
          </p>

          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Time Zone & Localization"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Time Zone & Localization");
            }}
          >
            Time Zone & Localization
          </p>

          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Language"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Language");
            }}
          >
            Language
          </p>
          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Admin Management"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Admin Management");
            }}
          >
            Admin Management
          </p>
          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Activity Logs & Audit"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Activity Logs & Audit");
            }}
          >
            Activity Logs & Audit
          </p>
          <p
            className={`text-[#A6A4A4] text-center font-semibold  small p-[12px] w-[200px]   cursor-pointer ${
              currentTab === "Transaction Logs"
                ? "  bg-primary rounded-[8px] !text-white"
                : ""
            }`}
            onClick={() => {
              onstateClick("Transaction Logs");
            }}
          >
            Transaction Logs
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

              <div className="mt-10 flex flex-col gap-3.5 pb-5 border-solid border-b-[1px] border-b-[gainsboro]">
                <p className="large font-medium">Current Password</p>

                <div className="flex flex-col md:flex-row gap-2 items-end">
                  <Input
                    type="password"
                    label="Password"
                    wrapperClass=" w-full md:w-[316px]"
                    placeholder="Enter Password"
                    icon={true}
                  />
                  <Button
                    onClick={() => setIsUpdatePass(true)}
                    text="Change Password"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              <div className=" w-full md:w-[650px] rounded-[10px]">
                <div className="py-3 px-6 w-full rounded-solid rounded-t-xl  flex justify-between bg-red">
                  <p className="text-white small font-bold">
                    Notification Type
                  </p>
                  <p className="text-white small font-bold">
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

          {currentTab === "Currency" && (
            <div className=" px-[20px] flex flex-col gap-[35px] bg-white p-5 rounded-[12px]">
              <p className="medium font-bold">CURRENCY SETTINGS</p>

              <div className="flex  items-center gap-2 ">
                <div>
                  <CustomSelect
                    label={"Select Default Currency"}
                    placeholder={"USD"}
                    wrapperClasses={" min-w-[200px] md:min-w-[481px]"}
                    options={CurrencyOptions}
                  />
                </div>
                <div className="border-1 border-[#247BA0] rounded-[8px] w-[82px] h-[38px] flex items-center justify-center mt-4">
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>

              <CurrencyTable/>
            </div>
          )}
          {currentTab === "Time Zone & Localization" && (
            <div className=" px-[20px] flex flex-col gap-[35px] bg-white p-5 rounded-[12px]">
              <p className="medium font-bold">TIME ZONE & LOCALIZATION</p>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-sm font-[Proxima Nova] ">
                  Time Zone Settings
                </p>

                <CustomSelect
                  label={"Default Platform Time Zone"}
                  placeholder={"GMT+0 (UTC)"}
                  wrapperClasses={"max-w-[507px]"}
                  options={TimezoneOptions}
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-semibold text-sm font-[Proxima Nova] ">
                  Localization Options
                </p>

                <CustomSelect
                  label={"Date Format"}
                  placeholder={"MM/DD/YYYY"}
                  wrapperClasses={"max-w-[507px]"}
                  options={DateOptions}
                />
              </div>

              <div className="flex  gap-20">
                <div>
                  <p className="text-xs font-normal  -mb-2 ">
                    Currency Symbol Format
                  </p>
                  <div className="border-1 border-[#247BA0] rounded-[8px] w-[82px] h-[38px] flex items-center justify-center mt-4">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-normal  -mb-2">
                    {" "}
                    Number Formatting
                  </p>
                  <div className="border-1 border-[#247BA0] rounded-[8px] w-[82px] h-[38px] flex items-center justify-center mt-4">
                    <Switch defaultChecked onChange={onChange} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === "Language" && (
            <div className=" px-[20px] flex flex-col gap-[35px] bg-white py-12 rounded-[12px]">
              <p className="medium font-bold">LANGUAGE SETTINGS</p>
              <div className="flex  items-center gap-14 ">
                <div>
                  <CustomSelect
                    label={"Default Platform Language"}
                    placeholder={"English 🇬🇧"}
                    wrapperClasses={" min-w-[120px] sm:min-w-[481px]"}
                    options={CurrencyOptions}
                  />
                </div>
                <div className="border-1 border-[#247BA0] rounded-[8px] w-[82px] h-[38px] flex items-center justify-center mt-4">
                  <Switch defaultChecked onChange={onChange} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  onClick={() => {}}
                  text="Upload New Language Filecy"
                  className="bg-primary rounded-lg  text-white    h-[43px] small font-semibold w-[211px]"
                />
                <Button
                  onClick={() => {}}
                  text="Edit Existing Language"
                  className="bg-primary rounded-lg  text-white   h-[43px] small font-semibold w-[211px]"
                />
                <Button
                  onClick={() => {}}
                  text="Delete Translation File"
                  className="bg-light-pink  rounded-lg  text-[#CF1742]   h-[43px] small font-semibold w-[211px]"
                />
              </div>
            </div>
          )}  


           {currentTab === "Admin Management" && (
            <div className=" px-[20px] flex flex-col gap-[35px] bg-white py-12 rounded-[12px]">
              <p className="medium font-bold">ADMIN MANAGEMENT</p>
             
                <AddAdminTable/>
                <RolebasedTable/>
            </div>
          )} 

             {currentTab === "Activity Logs & Audit" && (
            <div className=" px-[20px] flex flex-col gap-[35px] bg-white py-12 rounded-[12px]">
              <p className="medium font-bold"> ACTIVITY LOGS & AUDIT TRAILS</p>
              <ActivitylogTable/>
             
                
            </div>
          )} 


           {currentTab === "Transaction Logs" && (
            <div className=" px-[20px] flex flex-col gap-[35px] bg-white py-12 rounded-[12px]">
              <p className="medium font-bold"> TRANSACTION LOGS</p>
              <div>
                  <h2 className=" text-sm font-semibold"> Payment & Transaction</h2>
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-8  ">
                   
                     <Input label={'Default Payment Gateway'} placeholder={'Stripe'} wrapperClass="max-w-[481px]" />
                    <Input label={'Processing Fee (Fiat)'} placeholder={'2.5%'}  wrapperClass="max-w-[481px]" />
                     <Input label={'Processing Fee (Crypto)'} placeholder={'1%'}   wrapperClass="max-w-[481px]"/>
                      <Input label={'Minimum Withdrawal Limit'} placeholder={'10%'}   wrapperClass="max-w-[481px]"/>
                       <Input label={'Refund Policy'} placeholder={'7%'}   wrapperClass="max-w-[481px]"/>
                   </div>
                  
<TransactionLogTable/>
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
