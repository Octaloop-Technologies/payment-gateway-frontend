import React, { useState } from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";
import Checkbox from "antd/es/checkbox/Checkbox";

const Roles = () => {
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Transaction",
      dataIndex: "transaction",
      key: "transaction",
      render: (text) => (
        <input
          className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
          type="checkbox"
        />
      ),
    },
    {
      title: "Generate Reports",
      dataIndex: "reports",
      key: "reports",
      render: (text) => (
        <input
          className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
          type="checkbox"
        />
      ),
    },

    {
      title: "View Transactions",
      dataIndex: "transactions",
      key: "transactions",
      render: (text) => (
        <input
          className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
          type="checkbox"
        />
      ),
    },

    {
      title: "Approve Refunds",
      dataIndex: "refunds",
      key: "refunds",
      render: (text) => (
        <input
          className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
          type="checkbox"
        />
      ),
    },

    {
      title: "View Compliance Report",
      dataIndex: "complianceReport",
      key: "complianceReport",
      render: (text) => (
        <input
          className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
          type="checkbox"
        />
      ),
    },

    {
      title: "Flag Issues",
      dataIndex: "flagIssues",
      key: "flagIssues",
      render: (text) => (
        <input
          className="size-[21px] !border-[#2C87F2] border-solid border-[1px] cursor-pointer"
          type="checkbox"
        />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      user: "Finance Manager",
      transaction: "",
      reports: "",
      transactions: "",
      refunds: "",
      complianceReport: "",
      flagIssues: "",
    },
    {
      key: "2",
      user: "Support Agent",
      transaction: "$250",
      reports: "Large Unusual Transfer",
      transactions: "Resolved",
      refunds: "Investigate",
      complianceReport: "",
      flagIssues: "",
    },

    {
      key: "3",
      user: "Compliance Officer",
      transaction: "$250",
      reports: "Large Unusual Transfer",
      transactions: "Resolved",
      refunds: "Investigate",
      complianceReport: "",
      flagIssues: "",
    },

    {
      key: "4",
      user: "Technical Admin",
      transaction: "$250",
      reports: "Large Unusual Transfer",
      transactions: "Resolved",
      refunds: "Investigate",
      complianceReport: "",
      flagIssues: "",
    },
  ];
  return (
    <div className="">
      <CommonTable
        heading="User Roles & Permissions"
        selectDate={false}
        columns={columns}
        searchBox={false}
        dataSource={data}
        paymentMethod={false}
        selectType={false}
        ispagination={false}
        selectStatus={false}
      />
    </div>
  );
};

export default Roles;
