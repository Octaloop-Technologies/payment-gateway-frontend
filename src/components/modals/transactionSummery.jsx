import { Modal } from "antd";
import React, { useState } from "react";
import { Switch } from "antd";
import Button from "../shared/button";
import RefundTransaction from "./refundTransaction";
const TransactionSummery = ({ isTransaction, setIsTransaction }) => {
  const [isRefund, setIsRefund] = useState(false);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (checked) => {
    setIsToggled(checked);
  };
  const handleOk = () => {
    setIsTransaction(false);
  };

  const handleCancel = () => {
    setIsTransaction(false);
  };
  const transactionData = [
    { label: "Transaction ID", value: "TXN-00123" },
    { label: "User", value: "Anas" },
    { label: "Email", value: "asn.gakl,.dlcomn" },
    { label: "Amount", value: "250" },
    { label: "Payment Method", value: "Paypal" },
    { label: "Transaction Status", value: "✅ Completed" },
    { label: "Transaction Date", value: "02/15/2025" },
    { label: "Reason for Refund", value: "Overcharged" },
    { label: "Transaction Fee", value: "$2.50" },
  ];
  return (
    <>
      <Modal
        open={isTransaction}
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
            <p className="medium font-bold">Transaction Summary</p>
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
              className={`w-full p-3 rounded-lg border-solid justify-between border-[1px] flex transition-all duration-300
        ${
          isToggled
            ? "    bg-[#eaf2f6] border-[#247BA0] "
            : "bg-light-pink border-red-500 "
        }`}
            >
              <p className="font-semibold small">
                {isToggled ? (
                  <>
                    <span className="small font-semibold">Nonsuspicious</span>
                  </>
                ) : (
                  <>
                    <span className="small font-semibold">
                      Flagged As Suspicious
                    </span>{" "}
                    <span className="text-[10px] font-medium">
                      (Click Now to Mark it Nonsuspicious)
                    </span>
                  </>
                )}
              </p>
              <Switch defaultChecked={isToggled} onChange={handleToggle} className="bg-primary" />
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button
                onClick={() => {
                  setIsRefund(true);
                  setIsTransaction(false);
                }}
                text="Refund Transaction"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
              <Button
                text="Download Receipt"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
            </div>
          </div>
        </div>
      </Modal>
      <RefundTransaction isRefund={isRefund} setIsRefund={setIsRefund} />
    </>
  );
};

export default TransactionSummery;
