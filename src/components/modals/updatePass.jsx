import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import Input from "../shared/input";
import RefundSuccess from "./refundSuccess";
import eyeOpen from "../../assets/icons/eye-open.svg";

const UpdatePass = ({ isUpdatePass, setIsUpdatePass }) => {
  const handleOk = () => {
    setIsUpdatePass(false);
  };

  const handleCancel = () => {
    setIsUpdatePass(false);
  };

  const [isRefundSucess, setIsRefundSuccess] = useState(false);
  return (
    <>
      <Modal
        open={isUpdatePass}
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
            Update Your Password
          </p>
          <div className="w-full flex flex-col gap-5 px-6  py-5">
            <Input
              type="password"
              label="Enter Your Current Password"
              wrapperClass="w-full"
              placeholder="LeggooPay12"
              icon={true}
            />
            <Input
              type="password"
              label="Enter Your New Password"
              wrapperClass="w-full"
              placeholder="LeggooPay12"
              icon={true}
            />
            <Input
              type="password"
              label="Confirm Your New Password"
              wrapperClass="w-full"
              placeholder="LeggooPay12"
              icon={true}
            />

            <div className="w-full flex flex-col gap-3">
              <Button
                onClick={() => {
                  setIsRefundSuccess(true);
                  setIsUpdatePass(false);
                }}
                text="Change Password!"
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
      </Modal>

      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Password Changed Successfully!"
      />
    </>
  );
};

export default UpdatePass;
