import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { lineData } from "../../utils/chartData";
import { faker } from '@faker-js/faker';

import "../../assets/styles/charts/Line.scss"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
// https://react-chartjs-2.js.org/examples/line-chart


const options = {
  responsive: true,
  maintainAspectRatio: false,
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
        display: false,
        color: "red",
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
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];







const LineChart = (props) => {

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(214, 175, 20, 0.2)',
        borderColor: 'rgba(214, 175, 20, 1)',
        tension: 0.3,
        fill: true
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(66, 92, 90, 0.2)',
        borderColor: 'rgba(66, 92, 90, 1)',
        tension: 0.3,
        fill: true
      },
    ]
  });

  return (
    <div className="Line-chart-container">
      <div className="chart">
        <Line
          data={chartData}
          options={options}
        />
      </div>
    </div>
  );
}
export default LineChart;