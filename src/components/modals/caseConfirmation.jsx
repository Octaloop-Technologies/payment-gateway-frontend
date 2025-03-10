import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import AddCrypto from "./addCrypto";
const CaseConfirmation = ({ isCaseConfirm, setIsCaseConfirm }) => {
    const [isAddCrypto, setIsAddCrypto]= useState(false);

  const handleOk = () => {
    setIsCaseConfirm(false);
  };

  const handleCancel = () => {
    setIsCaseConfirm(false);
  };
  return (
    <>
      <Modal
        open={isCaseConfirm}
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
          <h2 className="!text-xl font-bold text-center">
          Are you sure you want to freeze **$10,000** in John Doe's account due to suspicious activity?
          </h2>

          <div className="w-full flex flex-col gap-3 ">
            <Button
              onClick={() => {
                setIsAddCrypto(true), setIsCaseConfirm(false);
              }}
              text="Confirm"
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

      <AddCrypto isAddCrypto={isAddCrypto} setIsAddCrypto={setIsAddCrypto}/>
    </>
  );
};

export default CaseConfirmation;
