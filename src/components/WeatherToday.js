import React from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherPic from "./WeatherPIc";

export default function WeatherToday(props) {
  return (
    <div className="container">
      <div className="today_detail">
        <WeatherPic image={props.today.image} />
        <WeatherDetails
          city={props.today.city}
          temp={props.today.temp}
          view={props.today.view}
          humidity={props.today.humidity}
          wind_speed={props.today.wind_speed}
        />
      </div>
    </div>
  );
}
