import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal, Switch } from "antd";
import AddCrypto from "./addCrypto";
import ExchangeRateModal from "./exchangeRateModal";
import ModifyTransaction from "./modifyTransaction";
import DeleteCurrency from "./deleteCurrency";

const CryptoSummary = ({ isCryptoModal, setIsCryptoModal }) => {
  const [isToggled, setIsToggled] = useState(true);
  const [isExchangeRate, setIsExchangeRate] = useState(false);
  const [isModifyTransaction, setIsModifyTransaction] = useState(false);
  const [isDeleteCurrency, setIsDeleteCurrency] = useState(false);

  const handleToggle = (checked) => {
    setIsToggled(checked);
  };
  const handleOk = () => {
    setIsCryptoModal(false);
  };

  const handleCancel = () => {
    setIsCryptoModal(false);
  };
  const transactionData = [
    { label: "Coin Name", value: "Bitcoin" },
    { label: "Symbol", value: "BTC" },
    { label: "Blockchain", value: "Bitcoin Network" },
    { label: "Status", value: "✅ Active" },
    { label: "Transaction Volume", value: "$500,000" },
    { label: "Transaction Fees", value: "0.5% per transfer" },
    { label: "Exchange Rate (USD)", value: "$48,500" },
    { label: "Last Updated", value: "02/18/2025" },
  ];
  return (
    <>
      <Modal
        open={isCryptoModal}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={460}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[20px] flex-col items-center  ">
          {/* Header */}

          <div className="w-full p-5 border-solid border-b-[gainsboro] border-b-[1px]">
            <p className="medium font-bold">Case Summary</p>
          </div>

          {/* Transaction Data */}

          <div className="w-full px-[44px] flex flex-col border-solid border-b-[gainsboro] border-b-[1px]">
            <div className="bg-[#deebf1] rounded-xl py-3 px-5 flex justify-between">
              <p className="text-primary small font-bold">Name</p>
              <p className="text-primary small font-bold">Value</p>
            </div>

            {transactionData.map((item, index) => (
              <div
                key={index}
                className="py-2.5 px-5 border-solid border-b-[gainsboro] border-b-[1px] flex justify-between"
              >
                <p className="font-semibold small">{item.label}</p>
                <p className="font-semibold small">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Marked Safe */}
          <div className="p-6 w-full flex flex-col gap-8">
            <div
              className={`w-full p-3 rounded-lg border-solid border-[1px] flex justify-between transition-all duration-300
        ${
          isToggled
            ? "    bg-[#eaf2f6] border-[#247BA0]"
            : "bg-light-pink border-red-500 "
        }`}
            >
              <p className="font-semibold small">
                {isToggled ? (
                  <>
                    <span className="small font-semibold">Crypto Enabled</span>
                  </>
                ) : (
                  <>
                    <span className="small font-semibold">Disabled</span>{" "}
                    <span className="text-[10px] font-medium">
                      (Click Now to Enable Crypto)
                    </span>
                  </>
                )}
              </p>
              <Switch
                defaultChecked={isToggled}
                onChange={handleToggle}
                className="bg-primary"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button
                onClick={() => {
                  setIsExchangeRate(true);
                  setIsCryptoModal(false);
                }}
                text="Update Exchange Rate"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
              <Button
                onClick={() => {
                  setIsModifyTransaction(true);
                  setIsCryptoModal(false);
                }}
                text="Modify Transaction Fees"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />

              <Button
                onClick={() => {
                  setIsDeleteCurrency(true);
                  setIsCryptoModal(false);
                }}
                text="Delete Currency"
                className="bg-light-pink rounded-lg w-full text-crimson p-3 small font-semibold"
              />
            </div>
          </div>
        </div>
      </Modal>

      <ExchangeRateModal
        isExchangeRate={isExchangeRate}
        setIsExchangeRate={setIsExchangeRate}
      />
      <ModifyTransaction
        isModifyTransaction={isModifyTransaction}
        setIsModifyTransaction={setIsModifyTransaction}
      />

      <DeleteCurrency
        isDeleteCurrency={isDeleteCurrency}
        setIsDeleteCurrency={setIsDeleteCurrency}
      />
    </>
  );
};

export default CryptoSummary;
