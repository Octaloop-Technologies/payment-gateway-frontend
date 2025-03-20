import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const ActiveUserTable = () => {
  const columns = [
    {
      title: "User Name",
      dataIndex: "user",
      key: "user",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Activity Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Last Active",
      dataIndex: "lastActive",
      key: "lastActive",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Payment Method",
      dataIndex: "payMethod",
      key: "payMethod",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
  ];

  const data = [
    {
      key: "1",
      user: "Salman Haider",
      location: "New York, USA",
      type: "Ride Payment",
      lastActive: "5 Hours Ago",
      payMethod: "Visa",
    },
    {
      key: "2",
      user: "Uzair Ali",
      location: "London, UK",
      type: "Crypto Listing",
      lastActive: "5 Hours Ago",
      payMethod: "BTC",
    },
    {
      key: "3",
      user: "Anas Ali",
      location: "New York, USA",
      type: "Watch-to-Earn",
      lastActive: "5 Hours Ago",
      payMethod: "Paypal",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Active Users"
          selectDate={false}
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={true}
          searchBox={false}
          paymentMethod={false}
          selectStatus={false}
        />
      </div>
    </>
  );
};

export default ActiveUserTable;
