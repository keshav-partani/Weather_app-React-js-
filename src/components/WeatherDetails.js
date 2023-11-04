import React from "react";
import ExtraInfo from "./ExtraInfo";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <h4 className="light_black">Today</h4>
      <h2 style={{ color: `rgba(${32}, ${29}, ${29})` }}>{props.city}</h2>
      <p className="light_black">Temperature: {props.temp}</p>
      <p className="light_black">{props.view}</p>
      <div className="extraInfo light_black">
        <ExtraInfo class="water" data={props.humidity} info="Humidity" />
        <ExtraInfo class="wind" data={props.wind_speed} info="Wind Speed" />
      </div>
    </div>
  );
}
