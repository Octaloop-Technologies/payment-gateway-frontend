import React from "react";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const chartOptions = {
    series: [20, 15, 25, 10, 15, 15], // Adjust values as per your data
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
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center border p-4 rounded-lg shadow-lg h-[400px]">
      <h2 className="text-xl font-bold mb-2">Chart</h2>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        width="350"
      />
    </div>
  );
};

export default DonutChart;
