import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const PayoutTrans = () => {
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
        title: "Payment Method",
        dataIndex: "paymentMethod",
        key: "paymentMethod",
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
   
  ];

  const data = [
    {
      key: "1",
      transactionId: "TXN-00123",
      user: "Salman Haider",
      transaction: "Ride Payemnt",
      amount: "$50",
      paymentMethod: "Visa",
      status: "Completed",
       },
    {
      key: "2",
      transactionId: "ORD-1234-234",
      user: "Uzair Ali",
      transaction: "Lahore",
      amount: "unassigned",
      paymentMethod: "Unassigned",
      status: "Delayed",
 
    },
    {
      key: "3",
      transactionId: "ORD-1234-234",
      user: "Anas Ali",
      transaction: "Islamabad",
      amount: "DHL",
      paymentMethod: "DHL",
      status: "Pending",

    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Payout Transactions"
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={true}
          selectDate={true}
          paymentMethod={false}
        />
      </div>
    </>
  );
};

export default PayoutTrans;
