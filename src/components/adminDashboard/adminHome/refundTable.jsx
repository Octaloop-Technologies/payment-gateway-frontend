import React from "react";
import CommonTable from "../../shared/commonTable";
import Chips from "../../shared/chips";

const RefundTable = () => {
  const columns = [
    {
      title: "Flagged Transaction",
      dataIndex: "ftransaction",
      key: "ftransaction",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Reason for Refund",
      dataIndex: "reasonRefund",
      key: "reasonRefund",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Refund Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        return <Chips status={status} />;
      },
    },

    {
      title: "Chargeback Alerts",
      dataIndex: "alerts",
      key: "alerts",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Automated/Manual",
      dataIndex: "automated",
      key: "automated",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },

    {
      title: "Action",
      dataIndex: "actions",
      key: "actions",
      render: (text) => (
        <button
          onClick={() => setIsReqKyc(true)}
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
      ftransaction: "TXN-99999",
      reasonRefund: "Overcharge",
      status: "Approved",
      alerts: "Bank Chargeback",
      automated: "Manual Approval",
      actions: "View",
    },
    {
      key: "2",
      ftransaction: "TXN-99999",
      reasonRefund: "Fraudulent Transaction",
      status: "Denied",
      alerts: "PayPal Reversal",
      automated: "✅ Auto-Processed",
      actions: "View",
    },
    {
      key: "3",
      ftransaction: "TXN-99999",
      reasonRefund: "Ride Dispute",
      status: "Pending",
      alerts: "Visa Chargeback",
      automated: "Manual Approval",
      actions: "View",
    },
  ];
  return (
    <>
      <div className="">
        <CommonTable
          heading="Refunds & Chargebacks"
          columns={columns}
          dataSource={data}
          selectType={false}
          ispagination={true}
          selectDate={true}
        />
      </div>
    </>
  );
};

export default RefundTable;
