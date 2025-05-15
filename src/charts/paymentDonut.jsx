import React from "react";
import Chart from "react-apexcharts";

const PaymentDonut = () => {
  const chartOptions = {
    series: [850000, 850000, 850000, 850000], // Values
    labels: ["Visa", "PayPal", "Google Pay", "Zelle"], // Labels
    colors: ["#5B68E1", "#6DDAB0", "#FFA851", "#2ECDF7"], // Custom Colors
    chart: {
      type: "donut",
    },
    legend: {
      show: false, // Hide default legend
    },
    dataLabels: {
      enabled: false, // Hide value labels
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%", // Donut size
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full  min-h-[500px] h-full ">
      <h3 className="font-semibold mb-4">Payment Distribution</h3>
      <div className="flex items-center w-full">
        {/* Legend */}
        <div className="flex flex-col gap-3 mr-6 w-1/2">
          {chartOptions.labels.map((label, index) => (
            <div
              key={index}
              className="flex items-center gap-2 w-full border-solid border-b-[1px] border-b-[gainsboro] pb-3"
            >
              <span
                className="size-3 rounded-full"
                style={{ backgroundColor: chartOptions.colors[index] }}
              ></span>
              <span className="text-gray-600">{label}</span>
              <span className="font-bold ml-auto">$850,000</span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <div className="w-1/2 ">
          <Chart
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            width="300"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDonut;
