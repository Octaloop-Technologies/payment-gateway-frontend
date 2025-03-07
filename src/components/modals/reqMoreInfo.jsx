import React, { useState } from "react";
import Button from "../shared/button";
import { Modal } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Textarea from "../shared/textarea";
import RefundSuccess from "./refundSuccess";

const ReqMoreInfo = ({ isReqInfo, setIsReqInfo }) => {
    const [isRefundSucess, setIsRefundSuccess] = useState(false);
  const [step, setStep] = useState(1); // Track step state
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleCancel = () => {
    setIsReqInfo(false);
    setStep(1); // Reset to step 1 when closed
  };

  return (
    <>
      <Modal
      open={isReqInfo}
      onCancel={handleCancel}
      className="modal-main"
      centered={true}
      width={577}
      maskClosable={true}
      footer={null}
    >
      <div className="modal-content flex  flex-col py-[18px]">
        <p className="font-bold medium pb-[10px] px-[15px] border-b-[1px] border-solid border-b-[gainsboro]">
          Request More Information
        </p>

        {/* Conditional Rendering Based on Step */}
        {step === 1 ? (
          <div className="w-full flex flex-col gap-[5px] px-[18px] pt-[50px]">
            <p className="text-xl font-semibold">
              Please select what additional details are needed from the user for
              transaction verification.
            </p>

            <div className="w-full flex flex-col gap-3 pt-5">
              <div className="w-full flex flex-col gap-3 px-2.5">
                {[
                  "Identity Verification",
                  "Proof of Funds",
                  "Transaction Justification",
                ].map((item, index) => (
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
                ))}

                {/* Deadline with Calendar */}
                <div className="w-full border-[1px] border-solid border-[#247BA0] p-3 rounded-lg flex justify-between">
                  <p className="small font-semibold">Deadline</p>
                  <div className="relative inline-block">
                    <Icon
                      className="cursor-pointer"
                      icon="uil:calender"
                      width="24"
                      height="24"
                      style={{ color: "#000" }}
                      onClick={() => setShowCalendar((prev) => !prev)}
                    />

                    {showCalendar && (
                      <div className="absolute bottom-0 right-6 bg-white p-4 shadow-lg rounded-lg">
                        <DatePicker
                          selected={selectedDate}
                          onChange={setSelectedDate}
                          inline
                        />
                        <div className="w-full flex items-center justify-center">
                          <button
                            className="mt-2 bg-primary text-white font-semibold px-4 py-1 rounded max-w-[120px] w-full"
                            onClick={() => setShowCalendar(false)}
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <Button
                  onClick={() => setStep(2)}
                  text="Next"
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
        ) : (
          // Step 2: New Content
          <div className="w-full flex flex-col gap-[30px] px-[18px] pt-[20px]">
            <Textarea
              label="Notes"
              placeholder="Enter additional notes for investigation"
              wrapperClass="w-full min-h-[150px] h-full"
              rows={6}
            />
            <div className="w-full flex flex-col gap-[12px]">
              <Button
                onClick={() => {
                 setIsRefundSuccess(true);
                  setIsReqInfo(false);
                  setStep(1);
                }}
                text="Send Request"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
              <Button
                onClick={handleCancel}
                text="Cancel"
                className="bg-light-pink rounded-lg w-full text-crimson p-3 small font-semibold"
              />
            </div>
          </div>
        )}
      </div>
    </Modal>

    <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Successful!"
      />
    </>
  
  );
};

export default ReqMoreInfo;
