import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const RecentTransactions = () => {
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
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
      title: "Method",
      dataIndex: "method",
      key: "method",
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
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
  ];

  const data = [
    {
      key: "1",
      transactionId: "TXN-00123",
      user: "Salman Haider",
      amount: "$250",
      method: "PayPal",
      status: "Completed",
      date: "02/15/2025",
    },
    {
      key: "2",
      transactionId: "ORD-1234-234",
      user: "Uzair Ali",
      amount: "Lahore",
      method: "Unassigned",
      status: "Failed",
      date: "02/15/2025",
    },
    {
      key: "3",
      transactionId: "ORD-1234-234",
      user: "Anas Ali",
      amount: "Islamabad",
      method: "DHL",
      status: "Pending",
      date: "02/15/2025",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Recent Transactions"
          selectDate={false}
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={false}
        />
      </div>
    </>
  );
};

export default RecentTransactions;
