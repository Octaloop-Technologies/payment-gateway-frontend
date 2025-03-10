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

const ModifyTransaction = ({ isModifyTransaction, setIsModifyTransaction }) => {
  const handleOk = () => {
    setIsModifyTransaction(false);
  };

  const handleCancel = () => {
    setIsModifyTransaction(false);
  };
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isRefundSucess, setIsRefundSuccess] = useState(false);
  return (
    <>
      <Modal
        open={isModifyTransaction}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-main"
        centered={true}
        width={550}
        maskClosable={true}
        footer={null}
      >
        <div className="modal-content flex  flex-col  ">
          <p className="font-bold medium pt-[18px] pb-[10px] px-[15px]  border-b-[1px] border-solid border-b-[gainsboro]">
            Modify Transaction Fees
          </p>
          <div className="w-full flex flex-col gap-5 px-5 mt-10 pb-7">
            <p className="text-2xl font-semibold">
              Update the processing fees for different payment types.
            </p>
            <div className="w-full border border-[gainsboro] rounded-[10px] overflow-hidden">
              <table className="w-full border-collapse">
                <thead className="bg-[#deebf1]">
                  <tr className="py-3 px-6 text-primary font-bold">
                    <td className="py-3 px-6">Transaction Type</td>
                    <td className="py-3 px-6">Current Fee</td>
                    <td className="py-3 px-6">New Fee</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="small font-medium border-solid border-b-[1px] border-b-[gainsboro]">
                    <td className="p-6">Fiat(USD/EUR)</td>
                    <td className="p-6">2.5%</td>
                    <td className="p-6">
                      {/* <div className="w-[152px] p-3 rounded-lg border-solid border-[#247BA0] border-[1px] flex justify-start">
                        <p className="small font-semibold"> Enter New %] </p>

                      </div> */}

                      <Input
                        type="text"
                        wrapperClass="w-[152px] "
                        placeholder="Enter New %]"
                      />
                    </td>
                  </tr>

                  <tr className="small font-medium border-solid border-b-[1px] border-b-[gainsboro]">
                    <td className="p-6">Crypto(BTC/ETH)</td>
                    <td className="p-6">1%</td>
                    <td className="p-6">
                      {/* <div className="w-[152px] p-3 rounded-lg border-solid border-[#247BA0] border-[1px] flex justify-start">
                        <p className="small font-semibold"> Enter New %] </p>
                      </div> */}

                      <Input
                        type="text"
                        wrapperClass="w-[152px] "
                        placeholder="Enter New %]"
                      />
                    </td>
                  </tr>

                  <tr className="small font-medium ">
                    <td className="p-6">P2P Transfer</td>
                    <td className="p-6">0.5%</td>
                    <td className="p-6">
                      {/* <div className="w-[152px] p-3 rounded-lg border-solid border-[#247BA0] border-[1px] flex justify-start">
                        <p className="small font-semibold"> Enter New %] </p>
                      </div> */}

                      <Input
                        type="text"
                        wrapperClass="w-[152px] "
                        placeholder="Enter New %]"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full flex flex-col gap-5 ">
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
                    setIsModifyTransaction(false);
                  }}
                  text="Save New Fees"
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

export default ModifyTransaction;
