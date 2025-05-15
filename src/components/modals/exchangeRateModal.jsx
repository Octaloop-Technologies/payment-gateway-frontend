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

const ExchangeRateModal = ({ isExchangeRate, setIsExchangeRate }) => {
  const handleOk = () => {
    setIsExchangeRate(false);
  };

  const handleCancel = () => {
    setIsExchangeRate(false);
  };
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isRefundSucess, setIsRefundSuccess] = useState(false);

  return (
    <>
      <Modal
        open={isExchangeRate}
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
            Update Exchange Rate
          </p>
          <div className="w-full flex flex-col gap-5 px-5 mt-10 pb-7">
            <p className="text-2xl font-semibold">
              Adjust the exchange rate for Bitcoin (BTC) to ensure correct
              conversion for transactions.
            </p>
            <div className="w-full flex flex-col gap-5 ">
              <Input
                type="text"
                label="Current Rate"
                wrapperClass="w-full"
                placeholder="1 BTC = $48,500"
              />

              <Input
                type="text"
                label="New Rate 1 BTC = $"
                wrapperClass="w-full"
                placeholder="Enter New Rate"
              />

              <div className="w-full border-[1px] border-solid border-[#247BA0] p-3 rounded-lg flex justify-between">
                <p className="small font-semibold">Effective Date</p>
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
              <Textarea
                label="Notes"
                placeholder="Enter additional notes for investigation"
                wrapperClass="w-full min-h-[150px] h-full"
                rows={6}
              />
              <div className="w-full flex flex-col gap-3">
                <Button
                  onClick={() => {
                    setIsRefundSuccess(true);
                    setIsExchangeRate(false);
                  }}
                  text="Save New Rate"
                  className="bg-primary rounded-lg w-full text-white p-4 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Cancel"
                  className="bg-light-pink rounded-lg w-full text-crimson p-4 small font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Saved Successful!"
      />
    </>
  );
};

export default ExchangeRateModal;
