import React from "react";
import Chart from "react-apexcharts";

const SplineArea = () => {
  const series = [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Expenses",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      height: 330,
      type: "line", // Use line instead of area for a cleaner look
      toolbar: {
        show: false,
      },
    },
    colors: ["#6C60FF", "#CE2A96"],
    stroke: {
      curve: "smooth",
      width: 2.5, // Make the lines more visible
    },
    fill: {
      type: "none", // Remove the shaded area
    },
    xaxis: {
      categories: [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", 
        "AUG", "SEP", "OCT", "NOV", "DEC"
      ],
      labels: {
        style: {
          colors: "black",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "black",
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      x: {
        formatter: (val) => val, // Keep month format simple
      },
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    grid: {
      borderColor: "#e7e7e7",
      strokeDashArray: 5, // Dashed grid lines for a lighter feel
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div id="chart" className="flex-grow bg-background !text-textPrimary">
        <Chart
          className="bg-background !text-textPrimary"
          options={options}
          series={series}
          type="line"
          height={340}
        />
      </div>
    </div>
  );
};

export default SplineArea;
