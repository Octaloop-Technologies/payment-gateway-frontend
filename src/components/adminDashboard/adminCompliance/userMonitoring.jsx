import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const UserMonitoring = () => {
  const columns = [
    {
      title: "Case ID",
      dataIndex: "caseId",
      key: "caseId",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Issue Type",
      dataIndex: "issueType",
      key: "issueType",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const isResolved = status === "Resolved";
        return (
          <span
            className={` px-3.5 py-2.5 w-[111px]  rounded-full flex justify-center items-center 
                ${
                  isResolved
                    ? "bg-light-green text-[#09AA34]"
                    : "bg-light-pink text-[#CF1742]"
                }`}
          >
            {status}
          </span>
        );
      },
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text) => (
        <button
          onClick={() => setIsCase(true)}
          className="bg-[#247BA0] text-white px-4 py-2.5 w-[130px] rounded-xl small font-semibold"
        >
          {text}
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      caseId: "COMP-001",
      user: "Alice Smith",
      amount: "$8,500",
      issueType: "Unusual Transaction",
      status: "Resolved",
      actions: " Investigate",
    },
    {
      key: "2",
      caseId: "COMP-001",
      user: "Williams",
      amount: "$8,500",
      issueType: "Multiple Failed KYC",
      status: "Open",
      actions: " View Report",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="User Compliance Monitoring"
          columns={columns}
          dataSource={data}
          selectType={false}
          durationType={true}
          ispagination={true}
          paymentMethod={false}
          selectDate={false}
        />
      </div>
    </>
  );
};

export default UserMonitoring;
