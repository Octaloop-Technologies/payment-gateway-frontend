import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import RefundSuccess from "./refundSuccess";
const RefundTransaction = ({ isRefund, setIsRefund }) => {
  const [isRefundSucess, setIsRefundSuccess] = useState(false);
  const handleOk = () => {
    setIsRefund(false);
  };

  const handleCancel = () => {
    setIsRefund(false);
  };
  return (
    <>
      <Modal
        open={isRefund}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={577}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[20px] flex-col items-center p-9 ">
          <img className="w-[120px] object-cover" src={msgImg} alt="" />
          <h2 className="text-2xl font-bold text-center">
            Are you sure you want to refund $250 to Salman Haider via PayPal?
          </h2>

          <div className="w-full flex flex-col gap-3 ">
            <Button
              onClick={() => {
                setIsRefundSuccess(true), setIsRefund(false);
              }}
              text="Confirm Refund"
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

      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
         text="Refund Successful!"
      />
    </>
  );
};

export default RefundTransaction;
