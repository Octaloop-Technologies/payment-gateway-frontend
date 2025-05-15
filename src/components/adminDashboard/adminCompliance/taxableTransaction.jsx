import React from "react";
import CommonTable from "../../shared/commonTable";
const TaxableTransaction = () => {
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
      title: "Tax Rate",
      dataIndex: "taxRate",
      key: "taxRate",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Tax Collected",
      dataIndex: "taxCollected",
      key: "taxCollected",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const isResolved = status === "Completed";
        return (
          <span
            className={` px-3.5 py-2.5 w-[111px]  rounded-full flex justify-center items-center 
                ${
                  isResolved
                    ? "bg-light-green text-black"
                    : "bg-light-pink text-black"
                }`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      transactionId: "TXN-10123",
      user: "Alice Smith",
      amount: "$8,500",
      taxRate: "10%",
      taxCollected: "$100",
      date: "02/18/2025",
      status: "Completed",
    },
    {
      key: "2",
      transactionId: "TXN-10123",
      user: "Williams",
      amount: "$8,500",
      taxRate: "10%",
      taxCollected: "$100",
      date: "02/18/2025",
      status: "Pending",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Taxable Transactions"
          columns={columns}
          dataSource={data}
          selectType={false}
          durationType={false}
          ispagination={true}
          paymentMethod={false}
        />
      </div>
    </>
  );
};

export default TaxableTransaction;
