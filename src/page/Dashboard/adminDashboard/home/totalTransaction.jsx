import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import TotalTransactionTable from "../../../../components/adminDashboard/adminHome/totalTransactionTable";
import RefundTable from "../../../../components/adminDashboard/adminHome/refundTable";
import FiatTrans from "../../../../components/adminDashboard/adminHome/fiatTrans";
import CryptoTrans from "../../../../components/adminDashboard/adminHome/cryptoTrans";
import CustomSelect from "../../../../components/shared/select";
import SplineArea from "../../../../charts/splineArea";
import PaymentDonut from "../../../../charts/paymentDonut";
import { useNavigate } from "react-router-dom";

const TotalTransaction = () => {
  const navigate = useNavigate();
  const dateOptions = [
    { value: "Today", label: "Today" },
    { value: "Last Week", label: "Last Week" },
    { value: "Last Month", label: "Last Month" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-[77px] ">
        <div className="w-full flex flex-col gap-[33px]">
          <div className="flex gap-2 items-center">
            <Icon
              icon="eva:arrow-back-outline"
              width="24"
              height="24"
              style={{ color: "#000" }}
              onClick={() => navigate("/admin-home")}
              className="cursor-pointer"
            />
            <p className="large font-bold">Total Transaction</p>
          </div>

          <div>
            <TotalTransactionTable />
          </div>

          <div>
            <RefundTable />
          </div>

          <div className="w-full flex justify-between gap-2">
            <div className="w-1/2">
              <FiatTrans />
            </div>

            <div className="w-1/2">
              <CryptoTrans />
            </div>
          </div>

          <div className="w-full flex justify-between gap-2">
            <div className="w-1/2 min-h-[500px] h-full">
              <PaymentDonut />
            </div>
            <div className="w-1/2 bg-white p-4 rounded-xl shadow-md flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <p className="medium font-bold">Transactions Time Frame</p>

                <CustomSelect
                  placeholder="Date Range"
                  options={dateOptions}
                  width={130}
                />
              </div>

              <SplineArea />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalTransaction;
