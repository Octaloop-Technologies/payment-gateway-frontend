import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const FraudDetector = () => {
  const columns = [
    {
      title: "User Name",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Payment Method",
      dataIndex: "payMethod",
      key: "payMethod",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      key: "dateTime",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Eeason for Flagging",
      dataIndex: "flagging",
      key: "flagging",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let bgColor = "bg-light-pink"; // Default color
        let textColor = "text-black";

        if (status === "76%") {
          bgColor = "bg-light-green";
        } else if (status === "92%") {
          bgColor = "bg-light-pink"; // Example color
        } else if (status === "65%") {
          bgColor = "bg-light-yellow"; // Example color
        }

        return (
          <span
            className={`px-3.5 py-2.5 w-[111px] rounded-full flex justify-center items-center ${bgColor} ${textColor}`}
          >
            {status}
          </span>
        );
      },
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text) => (
        <button
          onClick={() => setIsReqKyc(true)}
          className="bg-[#247BA0] text-white px-4 py-2.5 w-[120px] rounded-xl small font-semibold"
        >
          {text}
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      user: "Salman Haider",
      transactionId: "TXN-00123",
      payMethod: "Visa",
      amount: "$10,000",
      dateTime: "12 Mar 2025, 10:30 AM",
      flagging: "Large Unusual Transaction",
      status: "76%",
      actions: "Investigate",
    },
    {
      key: "2",
      user: "Uzair Ali",
      transactionId: "TXN-12345",
      payMethod: "02/15/2025",
      amount: "$10,000",
      dateTime: "12 Mar 2025, 10:30 AM",
      flagging: "Large Unusual Transaction",
      status: "92%",
      actions: "Investigate",
    },
    {
      key: "3",
      user: "Anas Ali",
      transactionId: "TXN-12345",
      payMethod: "02/15/2025",
      amount: "$10,000",
      dateTime: "12 Mar 2025, 10:30 AM",
      flagging: "Large Unusual Transaction",
      status: "65%",
      actions: "Investigate",
    },
  ];
  return (
    <div className="">
      <CommonTable
        heading="Fraud Detector"
        columns={columns}
        dataSource={data}
        selectType={false}
        ispagination={true}
        selectDate={true}
      />
    </div>
  );
};

export default FraudDetector;
