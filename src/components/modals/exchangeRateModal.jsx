import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import Input from "../shared/input";
import Textarea from "../shared/textarea";
import RefundSuccess from "./refundSuccess";


const ExchangeRateModal = ( {isExchangeRate, setIsExchangeRate }) => {

    const handleOk = () => {
        setIsExchangeRate(false);
      };
    
      const handleCancel = () => {
        setIsExchangeRate(false);
      };
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
            <div className="modal-content flex gap-[20px] flex-col  ">
              <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
              Update Exchange Rate
              </p>
    
              <div className="w-full flex flex-col gap-3 p-[18px] ">
                <div className="w-full flex flex-col gap-5 ">
                  <Input type="text" label="Reason" wrapperClass="w-full" />
                  <Textarea
                    label="Notes"
                    placeholder="Enter additional notes for investigation"
                    wrapperClass="w-full min-h-[150px] h-full"
                    rows={6}
                  />
                </div>
                <Button
                  onClick={() => {
                    setIsRefundSuccess(true), setIsAddCrypto(false);
                  }}
                  text="Confirm & Freeze Funds"
                  className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
                />
                <Button
                  onClick={handleCancel}
                  text="Cancel"
                  className="bg-light-pink rounded-lg w-full text-crimson p-3 small font-semibold"
                />
              </div>
            </div>
          </Modal>
    
    </>
  )
}

export default ExchangeRateModal;