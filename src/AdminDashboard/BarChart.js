import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const data = {
  labels: ["Mon", "tues", "wed"],
  datasets: [
    {
      label: "369",
      data: [3, 6, 9],
      backgroundColor: "#a7c8a7",
      borderColor: "black",
      borderWidth: 1,
    },
    {
      label: "369",
      data: [3, 6, 9],
      backgroundColor: "navy",
      borderColor: "black",
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      barPercentage: 0.5,
      ticks: {
        color: 'black', // Change the color of the y-axis labels to black
        font: {
          weight: 'bold', // Make the y-axis ticks bold
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black', // Change the color of the y-axis labels to black
        font: {
          weight: 'bold', // Make the y-axis ticks bold
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: 'black', // Change the color of the legend labels to black
      },
    },
  },
};

function BarChart() {
  return (
    <div style={{ padding: "20px", width: "50%", marginLeft: "2rem" }}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}

export default BarChart;
