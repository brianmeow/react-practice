import React from "react";
import { WeatherData } from "../types";

interface CityWeatherCardProps {
  data: WeatherData;
}
const CityWeatherCard: React.FC<CityWeatherCardProps> = ({ data }) => {
  return (
    <div>
      <h2>{data.city}</h2>
      <img src={data.icon} alt={data.description} />
      <p>{data.temperature}°C</p>
      <p>{data.description}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind: {data.windSpeed} m/s</p>
    </div>
  );
};

export default CityWeatherCard;
