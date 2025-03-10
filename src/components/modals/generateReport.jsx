import { Modal } from "antd";
import Input from "../shared/input";
import Textarea from "../shared/textarea";
import RefundSuccess from "./refundSuccess";
import CustomSelect from "../shared/select";
import Button from "../shared/button";

const GenerateReport = ({ isGenerateReport, setIsGenerateReport }) => {
  const taxOptions = [
    { value: "VAT", label: "VAT" },
    { value: "Service Tax", label: "Service Tax" },
    { value: "Sales Tax", label: "Sales Tax" },
    { value: "Corporate Tax", label: "Corporate Tax" },
    { value: "Transaction Fees Tax", label: "Transaction Fees Tax" },
  ];

  const dateRangeOptions = [
    { value: "Last Month", label: "Last Month" },
    { value: "Last Quarter", label: "Last Quarter" },
    { value: "Yearly", label: "Yearly" },
  ];
const reportTypeOptions=[
    { value: "Monthly", label: "Monthly" },
    { value: "Weekly", label: "Weekly" },
    { value: "Yearly", label: "Yearly" },
]
  const handleOk = () => {
    setIsGenerateReport(false);
  };

  const handleCancel = () => {
    setIsGenerateReport(false);
  };
  return (
    <>
      <Modal
        open={isGenerateReport}
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
            Generate New Report
          </p>

          <div className="w-full flex flex-col gap-2 p-[18px] ">
            <div className="w-full flex flex-col gap-5 ">
              <CustomSelect
                placeholder="VAT"
                options={taxOptions}
                label="Tax Category"
                wrapperClasses="!w-full flex flex-col gap-2 "
              />

              <CustomSelect
                placeholder="Last Month"
                options={dateRangeOptions}
                label="Date Range"
                wrapperClasses="!w-full flex flex-col gap-2 "
              />

              <CustomSelect
                placeholder="Monthly"
                options={reportTypeOptions}
                label="Report Type"
                wrapperClasses="!w-full flex flex-col gap-2 "
              />
            </div>

            <div className="flex gap-2 mt-4">
              <Button
                text="Generate Report"
                className="bg-primary rounded-lg w-full text-white p-3 small font-semibold"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GenerateReport;
