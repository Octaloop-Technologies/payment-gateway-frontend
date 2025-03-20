import { Modal } from "antd";
import React, { useState } from "react";
import { Switch } from "antd";
import Button from "../shared/button";
import RefundTransaction from "./refundTransaction";
import CaseConfirmation from "./caseConfirmation";
import ReqMoreInfo from "./reqMoreInfo";

const ViewReport = ({ isViewReport, setIsViewReport }) => {
  const [isReqInfo, setIsReqInfo] = useState(false);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (checked) => {
    setIsToggled(checked);
  };
  const handleOk = () => {
    setIsViewReport(false);
  };

  const handleCancel = () => {
    setIsViewReport(false);
  };
  const transactionData = [
    { label: "Report Type", value: "Fraud Investigation" },
    { label: "User Involved", value: "anas@qabc.om" },
    { label: "Transaction ID", value: "Transaction ID" },
    { label: "Amount", value: "$15,000" },
    { label: "Risk Level", value: "🔴 High" },
    { label: "Reason", value: "Unusual Large Transfer" },
    { label: "Status", value: "Under Review" },
  ];
  return (
    <>
      <Modal
        open={isViewReport}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={470}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[20px] flex-col items-center pb-6 ">
          {/* Header */}

          <div className="w-full p-5 border-solid border-b-[gainsboro] border-b-[1px]">
            <p className="medium font-bold">
              Compliance Report – Fraud Case #12345{" "}
            </p>
          </div>

          {/* Transaction Data */}

          <div className="w-full px-[44px]  flex flex-col border-solid border-b-[gainsboro] border-b-[1px]">
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
          <div className="px-6 w-full flex flex-col gap-8">
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
                    <span className="small font-semibold">
                      Marked as Resolved
                    </span>
                  </>
                ) : (
                  <>
                    <span className="small font-semibold">Unresolved</span>{" "}
                    <span className="text-[10px] font-medium">
                      (Click Now to Mark it Resolved)
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
                text="Download Report"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
              <Button
                onClick={handleCancel}
                text="Cancel"
                className="bg-light-pink rounded-lg w-full text-crimson p-3 small font-semibold"
              />
            </div>
          </div>
        </div>
      </Modal>

      <ReqMoreInfo isReqInfo={isReqInfo} setIsReqInfo={setIsReqInfo} />
    </>
  );
};

export default ViewReport;
