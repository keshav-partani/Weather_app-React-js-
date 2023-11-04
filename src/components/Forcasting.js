import React from "react";
import ForcastingDetails from "./ForcastingDetails";

export default function Forcasting(props) {
  return (
    <div className="container">
      <div className="forcasting">
        {props.forcast.map((day) => {
          return (
            <ForcastingDetails
              key={day.weekday}
              weekday={day.weekday}
              image={day.image}
              temp={day.temp}
            />
          );
        })}
      </div>
    </div>
  );
}
