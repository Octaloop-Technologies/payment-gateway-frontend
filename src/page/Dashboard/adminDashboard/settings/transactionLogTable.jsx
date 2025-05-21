import React from 'react'
import CommonTable from '../../../../components/shared/commonTable';
import Chips from '../../../../components/shared/chips';
import Button from '../../../../components/shared/button';
import { SiDatev } from 'react-icons/si';
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

     
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <Chips status={status} />;
      },
    },
{
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
     render: (text) => <span className="text-gray-700">{text}</span>,
      
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
     render: (text) => <span className="text-gray-700">{text}</span>,
      
    },

    {
      title: "User ID",
      dataIndex: "userid",
      key: "userid",
     render: (text) => <span className="text-gray-700">{text}</span>,
      
    },
      {
      title: "Date & Time",
      dataIndex: "datetime",
      key: "datetime",
     render: (text) => <span className="text-gray-700">{text}</span>,
      
    },
  ];

  const data = [
    {
      key: "1",
      id: "TXN-1001",
      type: "Deposit",
      status: "Active",
      amount:"$500",
      action: "USD",
      userid: "U-101",
      datetime:"Mar 14, 2025, 2:00 PM"
    },
    {
      key: "2",
      id: "TXN-1001",
      type: "withdrawal",
      status: "inactive",
      amount:"$250",
      action: "EUR",
      userid: "U-1-2",
      datetime:"Manual Mar 14, 2025, 2:00 PM"
    },
    
    
  ];
const  TransactionLogTable = () => {
  return (
    <div>

         <div className="w-full flex justify-between px-7 pt-4 items-center">
          <p className="medium font-bold w-full">Add/Edit/Delete</p>
          <Button
            onClick={() => {}}
            text="Add New Admin"
            className="bg-primary rounded-lg  text-white p-3  small font-semibold w-[174px]"
          />
          
        </div>
      <CommonTable
          heading={false}
          columns={columns}
          dataSource={data}
          paymentMethod={false}
          selectType={false}
        searchBox={false}
          ispagination={false}
          selectStatus={false}
          selectDate={false}
        />
        
    </div>
  )
}

export default TransactionLogTable
