import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";

Chart.register(...registerables);

const BarChart = () => {
  const humidity = [];
  const rain = [];
  const day = [];
  const [dataList, setdataList] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/data_weather_HCM")
      .then((res) => {
        setdataList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  dataList &&
    dataList.map((gannhat) => {
      humidity.push(gannhat.doam);
      rain.push(gannhat.luongmua);
      day.push(gannhat.thoigian);
    });

  return (
    <div>
      <Bar
        data={{
          labels: day,
          datasets: [
            {
              type: "line",
              label: "Lượng mưa (mm)",
              data: rain,
              backgroundColor: [
                // "rgba(255, 99, 132, 0.2)",
                // "rgba(54, 162, 235, 0.2)",
                // "rgba(255, 206, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                // "rgba(255, 99, 132, 1)",
                // "rgba(54, 162, 235, 1)",
                // "rgba(255, 206, 86, 1)",
                // "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
            },
            {
              label: "Độ ẩm (%)",
              data: humidity,
              backgroundColor: [
                // "rgba(255, 99, 132, 0.2)",
                // "rgba(54, 162, 235, 0.2)",
                // "rgba(255, 206, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderColor: [
                // "rgba(255, 99, 132, 1)",
                // "rgba(54, 162, 235, 1)",
                // "rgba(255, 206, 86, 1)",
                // "rgba(75, 192, 192, 1)",
                // "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 0.5)",
              ],
              borderWidth: 2,
            },
          ],
        }}
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      ></Bar>
    </div>
  );
};
export default BarChart;
