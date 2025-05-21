import React from 'react'
import CommonTable from '../../../../components/shared/commonTable';
import Chips from '../../../../components/shared/chips';
import Button from '../../../../components/shared/button';
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

      {
      title: "Role(s)",
      dataIndex: "roles",
      key: "roles",
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text) => (
        <button 
          onClick={() => setIsCryptoModal(true)}
          className="bg-[#247BA0] text-white px-4 py-2.5 w-[111px] rounded-xl small font-semibold"
        >
          {text}
        </button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "Anas",
      email: "anas@abc.xyz",
      status: "Active",
      roles:"Payment Admin",
      action: "Edit",
    },
    {
      key: "2",
      name: "salman",
      email: "salman@xyz.com",
      status: "Inactive",
      roles:"KYC Reviewer",
      action: "Edit",
    },
    
    
  ];
const AddAdminTable = () => {
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

export default AddAdminTable
