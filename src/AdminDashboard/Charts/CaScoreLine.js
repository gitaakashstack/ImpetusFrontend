import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
const LineChart = () => {
  const chartContainer = useRef(null);
  const [ chartInstance , setChartInstance] = useState(null);
  console.log(chartInstance);
  const charBuilder = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/leadersScore`);
      const data = await response.json();
      let cas = [];
      let score = [];
      data.leadersData.sort((a, b) => a.price < b.price ? 1: -1);
      data.leadersData.map(ld=>cas.push(ld.name));
      data.leadersData.map(ld=>score.push(ld.score));
        const newChartInstance = new Chart(chartContainer.current, {
            type: "bar",
            data: {
              labels:cas,
              datasets: [
                {
                  data: score,
                  label: "Total",
                  borderColor: "#3e95cd",
                  backgroundColor: [
                    "#ff4d6d",
                    "#06d6a0",
                    "#ffc300",
                    "#7b2cbf",
                    "#4091c9",
                    "#e74c3c",
                    "#34495e",
                    "#00B4D8",
                    "#F76E11",
                    "#8A39E1",
                    "#541212",
                    "#BAABDA",
                    "#EF2F88",
                    "#95CD41",
                    "#93FFD8",
                    "#F14A16"
                  ],
                  fill: false,
                },
              ],
            },
          });
          setChartInstance(newChartInstance);
  };

  useEffect(() => {
    charBuilder();
  }, []);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default LineChart;
