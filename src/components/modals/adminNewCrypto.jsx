import React, { useState } from "react";
import msgImg from "../../assets/images/dashboard/msgImg.png";
import Button from "../shared/button";
import { Modal } from "antd";
import Input from "../shared/input";
import Textarea from "../shared/textarea";
import RefundSuccess from "./refundSuccess";
import CustomSelect from "../shared/select";

const AdminNewCrypto = ({ isAdminNewCrypto, setIsAdminNewCrypto }) => {
  const [isRefundSucess, setIsRefundSuccess] = useState(false);

  const showSuccessModal = () => {
    setIsAdminNewCrypto(false);
    setIsRefundSuccess(true);
  };
  const methodOptions = [
    { value: "Bitcoin", label: "Bitcoin" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "Solana", label: "Solana" },
    { value: "Dogecoin", label: "Dogecoin" },
    { value: "Ripple", label: "Ripple" },
  ];

  const activeOptions = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];
  const handleOk = () => {
    setIsAdminNewCrypto(false);
  };

  const handleCancel = () => {
    setIsAdminNewCrypto(false);
  };
  return (
    <>
      <Modal
        open={isAdminNewCrypto}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={1080}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[20px] flex-col  ">
          <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
            Add New Cryptocurrency
          </p>

          <div className="w-full flex flex-col gap-2 p-[18px] ">
            <div className="w-full grid grid-cols-2 gap-5 ">
              <CustomSelect
                placeholder="Bitcoin"
                options={methodOptions}
                label="Coin Name"
                wrapperClasses="!w-full flex flex-col gap-2 "
              />
              <Input
                type="text"
                label="Coin Name"
                wrapperClass="w-full"
                placeholder="BTC"
              />
              <Input
                type="text"
                label="Blockchain Type"
                wrapperClass="w-full "
                placeholder="Bitcoin"
              />
              <Input
                type="text"
                label="Transaction Fee (%)"
                wrapperClass="w-full"
                placeholder="Set admin fees per transaction"
              />

              <CustomSelect
                placeholder="Active"
                options={activeOptions}
                label="Initial Status"
                wrapperClasses="!w-full flex flex-col gap-2 "
              />
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                onClick={handleCancel}
                text="Cancel"
                className="bg-light-pink rounded-lg w-[200px] text-crimson p-3 small font-semibold"
              />
              <Button
                onClick={showSuccessModal}
                text="Save & Publish"
                className="bg-primary rounded-lg w-[200px] text-white p-3 small font-semibold"
              />
            </div>
          </div>
        </div>
      </Modal>
      <RefundSuccess
        isRefundSucess={isRefundSucess}
        setIsRefundSuccess={setIsRefundSuccess}
        text="Added Successfully!"
      />
    </>
  );
};

export default AdminNewCrypto;
