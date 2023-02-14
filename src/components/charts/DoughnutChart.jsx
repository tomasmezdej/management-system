import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { doughnutData } from "../../utils/chartData";

import "../../assets/styles/charts/Doughnut.scss"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = (props) => {

  const [chartData, setChartData] = useState({
    // labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Flight share ",
        data: doughnutData.map((data) => data),
        backgroundColor: [
          "#3D5654",
          "#18B3A7",
          "#1890B3",
          "#D6AF14"
        ],
        borderColor: "transparent",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="Doughnut-chart-container">
      <div className="chart">
        <Doughnut
          data={chartData}
          options={{
            plugins: {
              title: {
                /* display: true,
                text: "Users Gained between 2016-2020" */
              }
            }
          }}
        />
      </div>
    </div>
  );
}
export default DoughnutChart;