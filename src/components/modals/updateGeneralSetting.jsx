import React, { useEffect, useState } from "react";
import msgImg from "../../assets/images/dashboard/enableImage.png";
import Button from "../shared/button";
import { Modal } from "antd";
import Input from "../shared/input";
import RefundSuccess from "./refundSuccess";
import CustomSelect from "../shared/select";

const UpdateGeneralSetting = ({ isUpdateSetting, setIsUpdateSetting }) => {
  const [isRefundSucess, setIsRefundSuccess] = useState(false);
  const handleOk = () => {
    setIsUpdateSetting(false);
  };

  const handleCancel = () => {
    setIsUpdateSetting(false);
  };

  const reportTypeOptions = [
    { value: "Light", label: "Light" },
    { value: "Dark", label: "Dark" },
  
  ];
  return (
    <>
      <Modal
        open={isUpdateSetting}
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
            Update General Settings
          </p>

          <div className="grid grid-cols-2 gap-8 p-6">
            <Input
              type="text"
              label="Name"
              wrapperClass="w-[100%]"
              placeholder="Leggoo Pay"
              className="w-full"
            />

            <Input
              type="email"
              label="Email"
              wrapperClass="w-[100%]"
              placeholder="nssk@abc.com"
              className="w-full"
            />

            <Input
              type="number"
              label="Contact"
              wrapperClass="w-[100%]"
              placeholder="723827391"
              className="w-full"
            />

            <CustomSelect
              placeholder="Light"
              options={reportTypeOptions}
              label="Preferences"
              wrapperClasses="!w-full flex flex-col gap-2 "
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
                setIsUpdateSetting(false);
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

export default UpdateGeneralSetting;
