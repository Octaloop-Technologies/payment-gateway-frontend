import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import Input from "../shared/input";
import Textarea from "../shared/textarea";
import RefundSuccess from "./refundSuccess";

const AddCrypto = ({ isAddCrypto, setIsAddCrypto }) => {
  const [isRefundSucess, setIsRefundSuccess] = useState(false);

  const handleOk = () => {
    setIsAddCrypto(false);
  };

  const handleCancel = () => {
    setIsAddCrypto(false);
  };
  return (
    <>
      <Modal
        open={isAddCrypto}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={577}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[10px] flex-col pb-4 ">
          <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
            Add New Cryptocurrency
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

      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Successful!"
      />
    </>
  );
};

export default AddCrypto;
