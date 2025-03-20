import { Modal } from "antd";
import React, { useState } from "react";
import { Switch } from "antd";
import Button from "../shared/button";
import CaseConfirmation from "./caseConfirmation";
import ReqMoreInfo from "./reqMoreInfo";

const ComplianceInvestigate = ({ isInvestigate, setIsInvestigate }) => {
  const [isCaseConfirm, setIsCaseConfirm] = useState(false);
  const [isReqInfo, setIsReqInfo] = useState(false);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (checked) => {
    setIsToggled(checked);
  };
  const handleOk = () => {
    setIsInvestigate(false);
  };

  const handleCancel = () => {
    setIsInvestigate(false);
  };
  const transactionData = [
    { label: "Transaction ID", value: "TXN-00123" },
    { label: "Amount", value: "$15,000" },
    { label: "Payment Method", value: "Paypal" },
    { label: "Risk Level", value: "High" },
  ];
  return (
    <>
      <Modal
        open={isInvestigate}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={470}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[20px] flex-col items-center  ">
          {/* Header */}

          <div className="w-full p-5 border-solid border-b-[gainsboro] border-b-[1px]">
            <p className="medium font-bold">Investigate COMP-001 </p>
          </div>

          {/* Transaction Data */}

          <div className="w-full px-[44px] flex flex-col border-solid border-b-[gainsboro] border-b-[1px]">
            <div className="bg-red rounded-xl py-3 px-5 flex justify-between">
              <p className="text-white small font-bold">Name</p>
              <p className="text-white small font-bold">Value</p>
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
          ? "    bg-[#dff4e5] border-[#247BA0]"
          : "bg-light-pink border-red-500 "
      }`}
            >
              <p className="font-semibold small">
                {isToggled ? (
                  <>
                    <span className="small font-semibold">Marked Safe</span>
                  </>
                ) : (
                  <>
                    <span className="small font-semibold">Unsafe</span>{" "}
                    <span className="text-[10px] font-medium">
                      (Click Now to Mark it Safe)
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
                  setIsCaseConfirm(true);
                  setIsInvestigate(false);
                }}
                text="Freeze Funds"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
              <Button
                onClick={() => {
                  setIsReqInfo(true);
                  setIsInvestigate(false);
                }}
                text="Request More Info"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
            </div>
          </div>
        </div>
      </Modal>
      <CaseConfirmation
        isCaseConfirm={isCaseConfirm}
        setIsCaseConfirm={setIsCaseConfirm}
      />
      <ReqMoreInfo isReqInfo={isReqInfo} setIsReqInfo={setIsReqInfo} />
    </>
  );
};

export default ComplianceInvestigate;
