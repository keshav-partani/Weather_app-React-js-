import CityInput from "./CityInput";
import Forcasting from "./Forcasting";
import WeatherToday from "./WeatherToday";

import api from "../api";

function fetchapi(city) {
  // console.log(city);
  // fetch weather details using city by weather api
  // data if in format of api.js then no problem otherwise do some customization
}

export default function App() {
  return (
    <div>
      <CityInput cityname={fetchapi} />
      <WeatherToday today={api[0]} />
      <Forcasting forcast={api[1]} />
    </div>
  );
}
