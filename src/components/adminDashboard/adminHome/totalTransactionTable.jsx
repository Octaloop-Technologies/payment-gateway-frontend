import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const TotalTransactionTable = () => {
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "User Name",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Transaction Type",
      dataIndex: "transaction",
      key: "transaction",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Payment Amount",
      dataIndex: "amount",
      key: "amount",
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
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text) => (
        <button
          onClick={() => setIsReqKyc(true)}
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
      transactionId: "TXN-00123",
      user: "Salman Haider",
      transaction: "Ride Payemnt",
      amount: "$50",
      method: "Visa",
      status: "Completed",
      actions: "View",
    },
    {
      key: "2",
      transactionId: "ORD-1234-234",
      user: "Uzair Ali",
      transaction: "Lahore",
      amount: "unassigned",
      method: "Unassigned",
      status: "Delayed",
      actions: "View",
    },
    {
      key: "3",
      transactionId: "ORD-1234-234",
      user: "Anas Ali",
      transaction: "Islamabad",
      amount: "DHL",
      method: "DHL",
      status: "Pending",
      actions: "View",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Transactions"
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={true}
          selectDate={true}
        />
      </div>
    </>
  );
};

export default TotalTransactionTable;
