import React from "react";

export default function WeatherPic(props) {
  return (
    <div className="weatherPic">
      <img src={props.image} alt="WeatherImage"/>
    </div>
  );
}
