import React, { useState } from "react";
import CommonTable from "../../../../components/shared/commonTable";
import Chips from "../../../../components/shared/chips";
import Button from "../../../../components/shared/button";
import AdminNewCrypto from "../../../../components/modals/adminNewCrypto";
import CryptoSummary from "../../../../components/modals/cryptoSummary";

const AdminCrypto = () => {
  const [isAdminNewCrypto, setIsAdminNewCrypto] = useState(false);
  const [isCryptoModal, setIsCryptoModal] = useState(false);
  const columns = [
    {
      title: "Coin",
      dataIndex: "coin",
      key: "coin",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
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
      title: "Transaction Volume",
      dataIndex: "transaction",
      key: "transaction",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Last Updated",
      dataIndex: "updated",
      key: "updated",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <button 
          onClick={() => setIsCryptoModal(true)}
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
      coin: "Bitcoin",
      symbol: "BTC",
      status: "Active",
      transaction: "$500,000",
      updated: "02/18/2025",
      action: "Edit",
    },
    {
      key: "2",
      coin: "Solana",
      symbol: "SOL",
      status: "Disabled",
      transaction: "$500,000",
      updated: "02/18/2025",
      action: "Edit",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-1 bg-white">
        <div className="w-full flex justify-between px-7 pt-4 items-center">
          <p className="medium font-bold w-full">Crypto Listings</p>
          <Button
            onClick={() => setIsAdminNewCrypto(true)}
            text="Add New Cryptocurrency"
            className="bg-primary rounded-lg  text-white p-3 small font-semibold w-[300px]"
          />
        </div>
        <CommonTable
          heading={false}
          columns={columns}
          dataSource={data}
          paymentMethod={false}
          selectType={false}
          ispagination={true}
        />
      </div>
      <AdminNewCrypto
        isAdminNewCrypto={isAdminNewCrypto}
        setIsAdminNewCrypto={setIsAdminNewCrypto}
      />

      <CryptoSummary
        isCryptoModal={isCryptoModal}
        setIsCryptoModal={setIsCryptoModal}
      />
    </>
  );
};

export default AdminCrypto;
