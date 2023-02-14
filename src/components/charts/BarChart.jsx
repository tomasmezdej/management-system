import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import { useState } from "react";
import { Data } from "../../utils/chartData";

import "../../assets/styles/charts/Bar.scss"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


/*
TO DO
  hide legend
  change step to 1
  fix grid
*/

const options = {
  responsive: true,
  scales: {
    x: {
      border: {
        display: true
      },
      grid: {
        display: false,
        drawOnChartArea: true,
        drawTicks: true,
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
        display: true,
        color: "rgba(66, 92, 90, 0.1)",
      },
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];



// https://react-chartjs-2.js.org/examples/vertical-bar-chart
const BarChart = (props) => {

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 7 })),
        backgroundColor: '#C99C33',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 7 })),
        backgroundColor: '#425C5A',
      },
    ]
  });

  return (
    <div className="Bar-chart-container">
      <div className="chart">
        <Bar
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
}
export default BarChart;