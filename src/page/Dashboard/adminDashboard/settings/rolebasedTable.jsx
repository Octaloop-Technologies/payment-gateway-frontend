import React, { useState } from 'react';
import { Table, Checkbox } from 'antd';

const RolebasedTable = () => {
  const [tableData, setTableData] = useState([
    {
      key: '1',
      name: 'Anas',
      view: false,
      create: false,
      edit: false,
      delete: false,
      export: false,
    },
    {
      key: '2',
      name: 'Salman',
      view: false,
      create: false,
      edit: false,
      delete: false,
      export: false,
    },
  ]);

  const handleCheckboxChange = (key, field) => (e) => {
    const newData = tableData.map(item =>
      item.key === key ? { ...item, [field]: e.target.checked } : item
    );
    setTableData(newData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>,
    },
    ...['view', 'create', 'edit', 'delete', 'export'].map(field => ({
      title: field.charAt(0).toUpperCase() + field.slice(1),
      dataIndex: field,
      key: field,
      render: (_, record) => (
        <Checkbox
          checked={!!record[field]}
          onChange={handleCheckboxChange(record.key, field)}
        />
      ),
    })),
  ];

  return <Table columns={columns} dataSource={tableData} pagination={false} />
  
  
    
 
};

export default RolebasedTable;
