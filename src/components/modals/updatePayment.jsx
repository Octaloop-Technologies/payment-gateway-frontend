import React, { useEffect, useState } from "react";
import msgImg from "../../assets/images/dashboard/enableImage.png";
import Button from "../shared/button";
import { Modal } from "antd";
import Input from "../shared/input";
import RefundSuccess from "./refundSuccess";

const UpdatePayment = ({ isUpdatePayment, setIsUpdatePayment }) => {
  const [isRefundSucess, setIsRefundSuccess] = useState(false);

  const handleOk = () => {
    setIsUpdatePayment(false);
  };

  const handleCancel = () => {
    setIsUpdatePayment(false);
  };
  return (
    <>
      <Modal
        open={isUpdatePayment}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={1090}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex  flex-col  pb-6">
          <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
            Update Payment & Transaction Settings
          </p>

          <div className="grid grid-cols-2 gap-8 p-6">
            <Input
              type="text"
              label="Default Payment Gateway"
              wrapperClass="w-[100%]"
              placeholder="Stripe"
              className="w-full"
            />

            <Input
              type="text"
              label="Processing Fee (Fiat)"
              wrapperClass="w-[100%]"
              placeholder="2.5%"
              className="w-full"
            />

            <Input
              type="text"
              label="Processing Fee (Crypto)"
              wrapperClass="w-[100%]"
              placeholder="1%"
              className="w-full"
            />

            <Input
              type="text"
              label="Minimum Withdrawal Limit"
              wrapperClass="w-[100%]"
              placeholder="$10"
              className="w-full"
            />

            <Input
              type="text"
              label="Refund Policy"
              wrapperClass="w-[100%]"
              placeholder="7 days"
              className="w-full"
            />
          </div>

          <div className="w-full flex  gap-[12px] px-6">
            <Button
              onClick={handleCancel}
              text="Cancel"
              className="bg-light-pink rounded-lg w-[174px] text-red p-3 small font-semibold"
            />

            <Button
              onClick={() => {
                setIsRefundSuccess(true);
                setIsUpdatePayment(false);
              }}
              text="Save Chnages"
              className="bg-primary rounded-lg w-[174px] text-white p-3 small font-semibold"
            />
          </div>
        </div>
      </Modal>

      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Changes Saved!"
      />
    </>
  );
};

export default UpdatePayment;
