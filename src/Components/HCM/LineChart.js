import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";

Chart.register(...registerables);

const LineChart = () => {
  const maxtemp = [];
  const mintemp = [];
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
      maxtemp.push(gannhat.nhietdocaonhat);
      mintemp.push(gannhat.nhietdothapnhat);
      day.push(gannhat.thoigian);
    });

  return (
    <div>
      <Line
        data={{
          labels: day,
          datasets: [
            {
              label: " Nhiệt độ cao nhất (°C)",
              data: maxtemp,
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                // "rgba(54, 162, 235, 0.2)",
                // "rgba(255, 206, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                // "rgba(54, 162, 235, 1)",
                // "rgba(255, 206, 86, 1)",
                // "rgba(75, 192, 192, 1)",
                // "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
            },
            {
              label: " Nhiệt độ thấp nhất (°C)",
              data: mintemp,
              backgroundColor: [
                // "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 1)",
                // "rgba(255, 206, 86, 0.2)",
                // "rgba(75, 192, 192, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                // "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                // "rgba(255, 206, 86, 1)",
                // "rgba(75, 192, 192, 1)",
                // "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 5,
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
      ></Line>
    </div>
  );
};
export default LineChart;
