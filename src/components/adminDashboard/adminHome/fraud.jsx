import React, { useState } from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";
import CaseSummary from "../../modals/caseSummary";

const Fraud = ({ hidePagination }) => {
  const [isCase, setIsCase] = useState(false);
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
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <Chips status={status} />;
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <button
          onClick={() => setIsCase(true)}
          className="bg-[#247BA0] text-white px-4 py-2.5 w-[111px] rounded-xl small font-semibold"
        >
          {text}
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      caseId: "TXN-00123",
      user: "Salman Haider",
      amount: "$250",
      reason: "Large Unusual Transfer",
      status: "Resolved",
      action: "Investigate",
    },
    {
      key: "2",
      caseId: "ORD-1234-234",
      user: "Uzair Ali",
      amount: "Lahore",
      reason: "Multiple Failed Logins",
      status: "Open",
      action: "View Report",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Fraud Detection Alerts"
          selectDate={false}
          columns={columns}
          dataSource={data}
          paymentMethod={false}
          selectType={false}
          ispagination={ false}
        />
      </div>

      <CaseSummary isCase={isCase} setIsCase={setIsCase} />
    </>
  );
};

export default Fraud;
