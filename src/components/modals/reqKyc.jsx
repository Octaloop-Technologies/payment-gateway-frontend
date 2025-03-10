import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../shared/input";
import Textarea from "../shared/textarea";
import RefundSuccess from "./refundSuccess";
import CustomSelect from "../shared/select";

const ReqKyc = ({ isReqKyc, setIsReqKyc }) => {
  const [step, setStep] = useState(1); // Track step state

  const handleOk = () => {
    setIsReqKyc(false);
  };

  const handleCancel = () => {
    setIsReqKyc(false);
    setStep(1);
  };
  const hoursOptions = [
    { value: "24 Hours", label: "24 Hours" },
    { value: "48 hours", label: "48 hours" },
    { value: "72 hours", label: "72 hours" },
  ];
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isRefundSucess, setIsRefundSuccess] = useState(false);
  return (
    <>
      <Modal
        open={isReqKyc}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={577}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex  flex-col  ">
          <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
            Request KYC Verification
          </p>
          {step === 1 ? (
            <div className="w-full flex flex-col gap-5 px-5 mt-10 pb-7">
              <p className="text-2xl font-semibold">
                Please select the required verification documents for user KYC
                compliance.
              </p>

              <div className="w-full flex flex-col gap-3 px-2.5">
                {["Government ID", "Selfie Verification", "Bank Statement"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="w-full border-[1px] border-solid border-[#247BA0] p-3 rounded-lg flex justify-between"
                    >
                      <p className="small font-semibold">{item}</p>
                      <input
                        className="size-[21px] border-[#2C87F2] border-solid border-[1px] cursor-pointer"
                        type="checkbox"
                      />
                    </div>
                  )
                )}
              </div>

              <div className="w-full flex flex-col gap-3 ">
                <Button
                  onClick={() => setStep(2)}
                  text="Next"
                  className="bg-primary rounded-lg w-full text-white p-4 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Cancel"
                  className="bg-light-pink rounded-lg w-full text-crimson p-4 small font-semibold"
                />
              </div>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 px-[25px] py-[20px]">
              <div className="w-full flex flex-col gap-3 px-2.5">
                <CustomSelect
                  placeholder="24 Hours"
                  options={hoursOptions}
                  label="Deadline"
                  wrapperClasses="!w-full flex flex-col gap-2 "
                />
                <Textarea
                  label="Notes"
                  placeholder="Enter additional notes for investigation"
                  wrapperClass="w-full min-h-[150px] h-full"
                  rows={6}
                />
              </div>

              <div className="w-full flex flex-col gap-3">
                <Button
                  onClick={() => {
                    setIsRefundSuccess(true);
                    setIsReqKyc(false);
                  }}
                  text="Send Request"
                  className="bg-primary rounded-lg w-full text-white p-4 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Cancel"
                  className="bg-light-pink rounded-lg w-full text-crimson p-4 small font-semibold"
                />
              </div>
            </div>
          )}
        </div>
      </Modal>

      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Request Sent!"
      />
    </>
  );
};

export default ReqKyc;
