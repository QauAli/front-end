import React, { useState } from "react";
import YearPicker from "react-year-picker";

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

const options = {
  scales: {
    x: {
      barPercentage: 0.5,
      ticks: {
        color: "black", // Change the color of the y-axis labels to black
        font: {
          weight: "bold", // Make the y-axis ticks bold
        },
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "black", // Change the color of the y-axis labels to black
        font: {
          weight: "bold", // Make the y-axis ticks bold
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "black", // Change the color of the legend labels to black
      },
    },
  },
};

function BarChart() {

  function handleChange(date) {
    fetchOneYearAppointments(date)
  }

  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Appointments",
        data: [],
        backgroundColor: "navy",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  async function fetchOneYearAppointments(year) {
    try {
      const reqBody = {
        year: year,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqBody),
      };

      const response = await fetch(
        "http://127.0.0.1:5000//total_appointments_in_month",
        requestOptions
      );
      const data = await response.json();

      if (!response.ok) {
      } else {
        console.log(data);

        const appointmentCountArray =
          data.total_appointments_in_month.map(
            (item) => item.appointment_count
          );

        console.log(appointmentCountArray);

        setChartData({
          ...chartData,
          datasets: [
            {
              ...chartData.datasets[0],
              data: appointmentCountArray,
            },
          ],
        });

      }
    } catch (error) {
      console.error("Error during appointment registration:", error);
    }

   
  }

  return (
    <div style={{ padding: "20px", width: "80%", marginLeft: "2rem" }}>
      <YearPicker onChange={handleChange} />
      <Bar data={chartData} options={options}></Bar>
    </div>
  );
}

export default BarChart;
