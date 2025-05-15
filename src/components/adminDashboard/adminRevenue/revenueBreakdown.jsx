import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const RevenueBreakdown = () => {
  const columns = [
    {
      title: "Transaction Type",
      dataIndex: "transactionType",
      key: "transactionType",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Total Transactions",
      dataIndex: "totalTransaction",
      key: "totalTransaction",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Revenue Generated",
      dataIndex: "revenueGenerated",
      key: "revenueGenerated",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
  ];

  const data = [
    {
      key: "1",
      transactionType: "Ride Payments",
      totalTransaction: "4,500 Transactions",
      revenueGenerated: "$1,200,000",
   
    },
    {
      key: "2",
      transactionType: "Watch-to-Earn",
      totalTransaction: "10,000 Viewss",
      revenueGenerated: "$1,200,000",
    },
    {
      key: "3",
      transactionType: "Send Money Fees",
      totalTransaction: "8,000 Views",
      revenueGenerated: "$750,000",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Revenue Breakdown"
          selectDate={true}
          columns={columns}
          dataSource={data}
          ispagination={true}
          paymentMethod={false}
          selectSource={true}
          selectStatus={false}
          durationType={false}
        />
      </div>
    </>
  );
};

export default RevenueBreakdown;
