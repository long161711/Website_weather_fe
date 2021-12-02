import { useState, useEffect } from "react";
import React from "react";
import ReactDom from "react-dom";
import { Image } from "react-bootstrap";
import axios from "axios";
import LineChart from "../Components/HaNoi/LineChart";
import BarChart from "../Components/HaNoi/BarChart";
import { Link } from "react-router-dom";

function HaNoi() {
  const [time, setTime] = useState(new Date());
  const [listData, setListData] = useState();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/forecast_HN")
      .then((res) => {
        setListData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    console.log(listData);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="background-homepage">
      <div className="time-homepage">
        <i className="time-hour-minutes" id="time">
          {time.toLocaleString()}
        </i>
        <div className="city-country">
          <ul className="menu">
            <li className="has-submenu">
              Hà Nội
              <ul className="submenu">
                <li>
                  <Link className="dropdown-item" to="/weather/danang">
                    Đà Nẵng
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/weather/hcm">
                    TP. HCM
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-weather">
        {listData &&
          listData.map((thoitiet) => {
            return (
              <div class="weather-forecast" id="weather-forecast">
                <div class="weather-forecast-item">
                  <div class="day">{thoitiet.thoigian}</div>
                  <Image
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    alt="weather icon"
                    class="w-icon"
                  />
                  <div class="temp">
                    Nhiệt độ: {thoitiet.nhietdothapnhat}&#176; C /{" "}
                    {thoitiet.nhietdocaonhat}&#176; C
                  </div>
                  <div class="temp">Độ ẩm: {thoitiet.doam} %</div>
                  <div class="temp">Tốc độ gió: {thoitiet.tocdogio} km/h</div>
                  <div class="temp">Lượng mưa: {thoitiet.luongmua} mm</div>
                </div>
              </div>
            );
          })}
      </div>
      <p className="weather-20day-ago">THỜI TIẾT HÀ NỘI 20 NGÀY QUA</p>
      <div className="chart-homepage">
        <LineChart />
      </div>
      <div className="barchart-homepage">
        <BarChart />
      </div>
    </div>
  );
}
export default HaNoi;
