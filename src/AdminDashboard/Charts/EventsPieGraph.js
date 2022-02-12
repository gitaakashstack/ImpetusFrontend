import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
const PieChart = () => {
  const chartContainer = useRef(null);
  const [ chartInstance , setChartInstance] = useState(null);
  console.log(chartInstance);
  const charBuilder = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/eventsregistrations`);
      const data = await response.json();
      let cas = ["CADegorized" , "Yantra Search" , "Heatovation" , "Trade Assemble" , "Quizario" , "TurstMe" , "Chess" , "Valorant" , "BGMI", "Roadmap - Strategy Design Contest"];
      let score = [];
      console.log(data.eventsRegistration);
    //   data.leadersData.map(ld=>cas.push(ld.name));
      data.eventsregistrations.map(ld=>score.push(ld));
        const newChartInstance = new Chart(chartContainer.current, {
            type: "doughnut",
            data: {
              labels:cas,
              datasets: [
                {
                  data: score,
                  label: "Total",
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
                      "#541212"
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

export default PieChart;
