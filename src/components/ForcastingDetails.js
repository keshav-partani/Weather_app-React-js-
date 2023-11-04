import React from "react";

export default function ForcastingDetails(props) {
  return (
    <div className="forcasting_details">
      <p>{props.weekday}</p>
      <img src={props.image}  alt="forcastinWeatherImages"/>
      <p>{props.temp}</p>
    </div>
  );
}
