import React from 'react'
import CommonTable from '../../../../components/shared/commonTable';
import Chips from '../../../../components/shared/chips';
import Button from '../../../../components/shared/button';
  const columns = [
    {
      title: "Admin ID",
      dataIndex: "adminid",
      key: "adminid",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

      {
      title: "Discription",
      dataIndex: "discription",
      key: "discription",
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
      adminid: "Anas",
      action:'System Change',
      discription:'Changed currency format to EUR',
      datetime: 'Mar 12, 2025, 10:45 AM Admin'
    },
    {
      key: "2",
       adminid: "AD-101AD-101",
      action:'Manual Transaction',
      discription:'Processed $1,200 refund',
      datetime: 'Mar 12, 2025, 10:45 AM'
    },
    
    
  ];
const ActivitylogTable = () => {
  return (
    <div>

         
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

export default ActivitylogTable
