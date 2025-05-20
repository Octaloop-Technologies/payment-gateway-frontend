import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const chartOptions = {
    series: [20, 15, 25, 10, 15, 15],
    options: {
      chart: {
        type: "donut",
      },
      labels: [
        "Ride commissions",
        "Subscriptions",
        "Peer to peer transactions",
        "Listing Ads",
        "Listing cryptocurrencies",
        "Watch to Earn earnings",
      ],
      colors: [
        "#6D7BFC",
        "#AB86EF",
        "#50C878",
        "#18C4F1",
        "#FFA53B",
        "#1E90FF",
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Amount Earned",
                fontSize: "14px",
                color: "#333",
                formatter: function () {
                  return  "$780,000"
                },
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-start border p-4 rounded-lg w-full">
      <p className="text-base font-bold mb-2 text-start">Chart</p>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        className="h-[80%] w-[100%]"
      />
    </div>
  );
};

export default DonutChart;
