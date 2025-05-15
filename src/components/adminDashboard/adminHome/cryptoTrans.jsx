import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const CryptoTrans = () => {
  const columns = [
    {
      title: "Cryptocurrency",
      dataIndex: "cryptocurrency",
      key: "cryptocurrency",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Total Transactions",
      dataIndex: "transaction",
      key: "transaction",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Total Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
  ];

  const data = [
    {
      key: "1",
      cryptocurrency: "BTC",
      transaction: "320 Transactions",
      amount: "$850,000",
    },
    {
      key: "2",
      cryptocurrency: "ETH",
      transaction: "150 Transactions",
      amount: "$850,000",
    },
    {
      key: "3",
      cryptocurrency: "SOL",
      transaction: "60 Transactions",
      amount: "$850,000",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Crypto Transactions"
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={true}
          selectDate={false}
          searchBox={false}
          paymentMethod={false}
          selectStatus={false}
        />
      </div>
    </>
  );
};

export default CryptoTrans;
