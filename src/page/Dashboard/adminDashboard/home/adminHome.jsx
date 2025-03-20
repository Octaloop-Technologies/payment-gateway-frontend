import React, { useState } from "react";
import { Icon } from "@iconify/react";
import KeyMetricsCard from "../../../../components/adminDashboard/adminHome/keyMetricsCard";
import keyUser from "../../../../assets/icons/keyUser.svg";
import keyPayouts from "../../../../assets/icons/keyPayouts.svg";
import keyFraud from "../../../../assets/icons/keyAlerts.svg";
import keyActive from "../../../../assets/icons/keyActiveUser.svg";

import CommonTable from "../../../../components/shared/commonTable";
import RecentTransactions from "../../../../components/adminDashboard/adminHome/recentTransactions";
import Fraud from "../../../../components/adminDashboard/adminHome/fraud";
import SplineArea from "../../../../charts/splineArea";
import CustomSelect from "../../../../components/shared/select";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Select } from "antd";
const { Option } = Select;
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import DonutChart from "../../../../charts/dountChart";
import { Link } from "react-router-dom";
const metricsData = [
  {
    title: "Total Transactions",
    value: "$2,450,000",
    description: " Up This Month",
    percentage: "15% ",
    icon: keyUser,
    icontrend: "ic:baseline-trending-up",
    route: "/total-transaction",
  },
  {
    title: "Total Payouts",
    value: "$780,000",
    description: "Up Processed This Month",
    percentage: "15% ",
    icon: keyPayouts,
    icontrend: "ic:baseline-trending-up",
    route: "/total-payouts",
  },
  {
    title: "Fraud Alerts",
    value: "3",
    description: "Suspicious transactions",
    percentage: "",
    icon: keyFraud,
    route: "/total-fraud",
  },
  {
    title: "Active Users",
    value: "35,000",
    description: "Up from yesterday",
    percentage: "1.8% ",
    icon: keyActive,
    icontrend: "ic:baseline-trending-up",
    route: "/active-users",
  },
];
const dateOptions = [
  { value: "Today", label: "Today" },
  { value: "Last Week", label: "Last Week" },
  { value: "Last Month", label: "Last Month" },
];

// Calender
const durationOptions = [
  { value: "yearly", label: "Yearly" },
  { value: "daily", label: "Daily" },
];

// Map

const AdminHome = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("yearly");

  const [filters, setFilters] = useState({
    region: "",
    payment: "",
    id: "",
    status: "",
    userType: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const regionOptions = [
    { value: "North America", label: "North America" },
    { value: "Europe", label: "Europe" },
  ];

  const paymentOptions = [
    { value: "Paypal", label: "Paypal" },
    { value: "DHL", label: "DHL" },
  ];

  const placeOptions = [
    { value: "AGD768", label: "AGD768" },
    { value: "JSDH77", label: "JSDH77" },
  ];
  
  const statusOptions = [
    { value: "completed", label: "completed" },
    { value: "failed", label: "failed" },
  ];
  
  const  liveOptions = [
    { value: "Live", label: "Live" },
    { value: "Pending", label: "Pending" },
  ];
  const  riderOptions = [
    { value: "Rider", label: "Rider" },
    { value: "Driver", label: "Driver" },
  ];
  return (
    <div className="w-full flex flex-col gap-4">
      {/* <p className="font-bold text-lg">Key Metrics</p> */}
      <div className="flex justify-between gap-4 w-full">
        <div className=" w-[50%] grid grid-cols-2 gap-4">
        {metricsData.map((metric, index) => (
        <Link key={index} to={metric.route}>
          <KeyMetricsCard {...metric} />
        </Link>
      ))}
        </div>
        <div className="w-[50%] bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <p className="medium font-bold">Transactions Time Frame</p>

            <CustomSelect
              placeholder="Date Range"
              options={dateOptions}
              width={130}
            />
          </div>

          <SplineArea />
        </div>
      </div>

      {/* <div>
        <RecentTransactions />
      </div> */}

      {/* <div>
        <Fraud />
      </div> */}

      <div className="flex w-full gap-3 flex-wrap 2xl:flex-nowrap ">
        {/* <div className=" bg-white p-4 rounded-xl shadow-md flex flex-col gap-2"> */}

        <div className="p-4 bg-white shadow-lg rounded-lg w-[40%] 2xl:w-[25%]">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Calendar</h4>
            <div className="flex gap-2">
              <CustomSelect
                placeholder="Yearly"
                options={durationOptions}
                width={80}
                value={view}
                onChange={(value) => setView(value)} // Update view state when selection changes
              />

              <button
                onClick={() => handleAddEvent({ title: "New Event", date })}
                className="bg-primary text-white extra-small px-3 py-1 rounded"
              >
                Add Event
              </button>
            </div>
          </div>

          {/* Calendar View */}
          {view === "yearly" && <Calendar onChange={setDate} value={date} />}

          {view === "daily" && (
            <div className="mt-4 flex flex-col gap-4">
              <div className="w-full flex justify-between">
                <p className="text-sm font-semibold mb-2">Events</p>
                <p className="text-sm font-semibold mb-2">Events</p>
              </div>

              <div className="flex w-full gap-2  items-start">
                <p className="extra-small font-medium">Thu 14</p>
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex flex-col w-full gap-1 py-2 px-3 bg-light-green rounded-sm border-solid border-l-[2px] border-l-[#2A9D8F]">
                    <p className="extra-small font-semibold">
                      Meditation and mindfulness
                    </p>
                    <p className="extra-small font-normal">13/03/2025</p>
                  </div>

                  <div className="flex flex-col w-full gap-1 py-2 px-3 bg-light-green rounded-sm border-solid border-l-[2px] border-l-[#2A9D8F]">
                    <p className="extra-small font-semibold">
                      Meditation and mindfulness
                    </p>
                    <p className="extra-small font-normal">13/03/2025</p>
                  </div>
                </div>
              </div>

              <div className="flex w-full gap-2  items-start">
                <p className="extra-small font-medium">Fri 22</p>

                <div className="flex flex-col w-full gap-1 py-2 px-3 bg-light-yellow rounded-sm border-solid border-l-[2px] border-l-[#EE9D75]">
                  <p className="extra-small font-semibold">
                    Meditation and mindfulness
                  </p>
                  <p className="extra-small font-normal">13/03/2025</p>
                </div>
              </div>

              <div className="flex w-full gap-2  items-start">
                <p className="extra-small font-medium">Mon 20</p>

                <div className="flex flex-col w-full gap-1 py-2 px-3 bg-purple rounded-sm border-solid border-l-[2px] border-l-[#0073CC]">
                  <p className="extra-small font-semibold">
                    Meditation and mindfulness
                  </p>
                  <p className="extra-small font-normal">13/03/2025</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Map */}
        <div className="p-4 bg-white shadow-md rounded-lg w-[50%] ">
          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-3 mb-4 w-full">
            <CustomSelect
              placeholder="Region"
              options={regionOptions}
              width={130}
            />

            <CustomSelect
              placeholder="Paypal"
              options={paymentOptions}
              width={130}
            />

            <CustomSelect
              placeholder="AEC09"
              options={placeOptions}
              width={130}
            />

            <CustomSelect
              placeholder="Status"
              options={statusOptions}
              width={130}
            />

            <CustomSelect
              placeholder="Live"
              options={liveOptions}
              width={130}
            />

            <CustomSelect
              placeholder="Rider"
              options={riderOptions}
              width={130}
            />
            {/* 

            <Select
              placeholder="Payment"
              onChange={(val) => handleFilterChange("payment", val)}
              className="w-32"
            >
              <Option value="Paypal">Paypal</Option>
              <Option value="Credit Card">Credit Card</Option>
            </Select>

            <Select
              placeholder="ID"
              onChange={(val) => handleFilterChange("id", val)}
              className="w-32"
            >
              <Option value="ABC09.9">ABC09.9</Option>
            </Select>

            <Select
              placeholder="Status"
              onChange={(val) => handleFilterChange("status", val)}
              className="w-32"
            >
              <Option value="Live">Live</Option>
              <Option value="Pending">Pending</Option>
            </Select>

            <Select
              placeholder="User Type"
              onChange={(val) => handleFilterChange("userType", val)}
              className="w-32"
            >
              <Option value="Rider">Rider</Option>
              <Option value="Driver">Driver</Option>
            </Select> */}
          </div>

          {/* Map Section */}
          <div className="border p-4 rounded-lg bg-gray-100 h-[350px]">
            <ComposableMap>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} />
                  ))
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

        {/* DonutChart */}
        <div className="p-4 bg-white shadow-md rounded-lg h-[430px]  2xl:w-[30%]">
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
