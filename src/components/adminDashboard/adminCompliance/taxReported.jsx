import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";
const TaxReported = () => {
  const columns = [
    {
      title: "Report ID",
      dataIndex: "reportId",
      key: "reportId",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Period",
      dataIndex: "period",
      key: "period",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Tax Collected",
      dataIndex: "taxCollected",
      key: "taxCollected",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (status) => {
          const isResolved = status === "Completed";
          return (
            <span
              className={` px-3.5 py-2.5 w-[111px]  rounded-full flex justify-center items-center 
                  ${
                    isResolved
                      ? "bg-light-green text-[#09AA34]"
                      : "bg-light-pink text-[#CF1742]"
                  }`}
            >
              {status}
            </span>
          );
        },
      },
    {
      title: "Download",
      dataIndex: "download",
      key: "download",
      render: (text) => (
        <button
          onClick={() => setIsCase(true)}
          className="bg-[#247BA0] text-white px-4 py-2.5 w-[130px] rounded-xl small font-semibold"
        >
          {text}
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      reportId: "TXN-00123",
      type:"Monthly Tax Report",
      period: "Feb 2025",
      taxCollected: "$8,500",
      status: "Completed",
      download: " Download PDF",
    },
    {
      key: "2",
      reportId: "TXN-00123",
      type:"Quarterly Tax Report",
      period: "Q1 2025",
      taxCollected: "$8,500",
      status: "Pending",
      download: " Download CSV",
    },
 
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Tax Reports Table"
          columns={columns}
          dataSource={data}
          selectType={false}
          durationType={true}
          ispagination={true}
          paymentMethod={false}
        />
      </div>
    </>
  );
};

export default TaxReported;
