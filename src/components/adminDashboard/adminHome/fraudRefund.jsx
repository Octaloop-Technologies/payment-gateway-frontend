import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const FraudRefund = () => {
  const columns = [
    {
      title: "User Name",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      key: "dateTime",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Refund Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <Chips status={status} />;
      },
    },
  ];

  const data = [
    {
      key: "1",
      user: "Salman Haider",
      reason: "Large Unusual Transaction",
      dateTime: "12 Mar 2025, 10:30 AM",
      status: "inreview",
    },
    {
      key: "2",
      user: "Uzair Ali",
      reason: "Multiple Failed Attempts",
      dateTime: "12 Mar 2025, 10:30 AM",
      status: "Blocked",
    },
    {
      key: "3",
      user: "Anas Ali",
      reason: "High-Risk IP Address",
      dateTime: "12 Mar 2025, 10:30 AM",
      status: "Frozen",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Refunds & Chargebacks"
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={true}
          selectDate={false}
          paymentMethod={false}
          searchBox={false}
          selectStatus={false}
        />
      </div>
    </>
  );
};

export default FraudRefund;
