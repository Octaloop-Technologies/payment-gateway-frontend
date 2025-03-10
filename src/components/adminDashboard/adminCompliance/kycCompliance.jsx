import React from "react";
import CommonTable from "../../shared/commonTable";

const KycCompliance = () => {
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const isResolved = status === "Verified";
        return (
          <span
            className={` px-3.5 py-2.5 w-[111px]  rounded-full flex justify-center items-center 
                      ${
                        isResolved
                          ? "bg-light-green text-black"
                          : "bg-light-pink text-black"
                      }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      title: "Tansaction",
      dataIndex: "transaction",
      key: "transaction",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Last Activity",
      dataIndex: "activity",
      key: "activity",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
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
      user: "Alice Smith",
      status: "Verified",
      transaction: "$8,500",
      activity: "02/18/2025",
      actions: " View",
    },
    {
      key: "2",
      user: "Williams",
      status: "Pending",
      transaction: "$8,500",
      activity: "02/18/2025",
      actions: " Request KYC",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="KYC Compliance"
          columns={columns}
          dataSource={data}
          selectType={false}
          durationType={false}
          ispagination={true}
          paymentMethod={false}
          selectDate={true}
          // selectStatus={true}
        />
      </div>
    </>
  );
};

export default KycCompliance;
