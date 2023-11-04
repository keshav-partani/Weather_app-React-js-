import React from "react";

export default function CityInput(props) {
  function handleChange(event) {
    const city = event.target.value;
    props.cityname(city);
  }

  return (
    <div className="city_detail">
      <input
        type="text"
        placeholder="Enter a city..."
        onChange={handleChange}
      />
    </div>
  );
}
