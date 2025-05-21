import React, { useState } from "react";
import Chips from "../../../../components/shared/chips";
import CommonTable from "../../../../components/shared/commonTable";
import TransactionSummery from "../../../../components/modals/transactionSummery";

const AdminTransaction = () => {
  const [isTransaction, setIsTransaction] = useState(false);
  const TransactionMethodOptions = [
    { value: "amazon", label: "Amazon" },
    { value: "cashapp", label: "Cash App" },
    { value: "applepay", label: "Apple Pay" },
    { value: "mastercard", label: "Master Card" },
  ];
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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <button
          onClick={() => setIsTransaction(true)}
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
      transactionId: "TXN-00123",
      user: "Salman Haider",
      amount: "$250",
      method: "PayPal",
      status: "Completed",
      date: "02/15/2025",
      action: "View",
    },
    {
      key: "2",
      transactionId: "ORD-1234-234",
      user: "Uzair Ali",
      amount: "Lahore",
      method: "Unassigned",
      status: "delayed",
      date: "02/15/2025",
      action: "View",
    },
    {
      key: "3",
      transactionId: "ORD-1234-234",
      user: "Anas Ali",
      amount: "Islamabad",
      method: "DHL",
      status: "Pending",
      date: "02/15/2025",
      action: "View",
    },
  ];
  return (
    <>
      <div className=" ">
        <CommonTable
          heading="Transactions"
          columns={columns}
          dataSource={data}
          selectType={false}
          pagination={true}
          // options={TransactionMethodOptions}
        />
      </div>
      <TransactionSummery
        isTransaction={isTransaction}
        setIsTransaction={setIsTransaction}
      />
    </>
  );
};

export default AdminTransaction;
