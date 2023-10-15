import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css';

function LineChart() {
  const data = {
    labels: ['jan', 'feb', 'mar', 'april'],
    datasets: [
      {
        label: 'sales for 2020(M)',
        data: [3, 2, 1, 5, 2],
      },
    ],
  };


  return (
    <div className='chart'>
      <Line data={data}/>
    </div>
  );
}

export default LineChart;
