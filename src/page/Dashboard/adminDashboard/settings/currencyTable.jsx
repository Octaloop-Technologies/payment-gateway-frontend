import React from 'react'
import CommonTable from '../../../../components/shared/commonTable';
import Chips from '../../../../components/shared/chips';
import Button from '../../../../components/shared/button';
  const columns = [
    {
      title: "Currency",
      dataIndex: "currency",
      key: "currency",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Total Transactions",
      dataIndex: "totaltransactions",
      key: "totaltransactions",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

      {
      title: "Conversion Rate (Live))",
      dataIndex: "conversionrate",
      key: "conversionrate",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    
  ];

  const data = [
    {
      key: "1",
      currency: "USD",
      totaltransactions: "$1,250,000",
      conversionrate: "-",
     
    },
    {
      key: "2",
     currency: "EUR",
      totaltransactions: "€980,000",
      conversionrate: "1 USD = 0.92 EUR",
    },
     {
      key: "3",
     currency: "BTC",
     totaltransactions: "1.5 BTC",
      conversionrate: "1 BTC = $64,300",
    },
    {
      key: "4",
     currency: "ETH",
      totaltransactions: "20 ETH",
      conversionrate: "1 ETH = $3,200",
    },
  ];
const CurrencyTable = () => {
  return (
    <div className='max-w-[600px]'>

        
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

export default CurrencyTable
