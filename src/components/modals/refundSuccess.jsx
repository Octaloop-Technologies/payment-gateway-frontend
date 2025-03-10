import { Modal } from "antd";
import React, { useEffect } from "react";
import successImg from "../../assets/images/dashboard/refundSuccess.png";

const RefundSuccess = ({ isRefundSucess, setIsRefundSuccess, text }) => {
  const handleOk = () => {
    setIsRefundSuccess(false);
  };

  const handleCancel = () => {
    setIsRefundSuccess(false);
  };

  useEffect(() => {
    if (isRefundSucess) {
      const timer = setTimeout(() => {
        setIsRefundSuccess(false);
      }, 1500); // Auto close after 3 seconds

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [isRefundSucess, setIsRefundSuccess]);
  return (
    <>
      <Modal
        open={isRefundSucess}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={527}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex gap-[20px] flex-col items-center p-9 ">
          <img className="w-[102px] object-cover" src={successImg} alt="" />
          <h2 className="text-2xl font-bold text-center">{text}</h2>
        </div>
      </Modal>
    </>
  );
};

export default RefundSuccess;
