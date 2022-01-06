import React from 'react';
import { convertUnixDate } from '../utils/utils';

const WeatherInfo = ({ city, country, temp, icon, date, description, minTemp, maxTemp }) => {
  return (
    <div className="weather">
      <div className="location">
        <h1>
          {city}, {country}
        </h1>
        <h3>{convertUnixDate(date)}</h3>
      </div>
      <div className="weather-info">
        <div className="temp">{temp}° C</div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
        <div className="description">{description.toUpperCase()}</div>
        <span>Min Temp: {minTemp}° C</span>
        <span>Max Temp: {maxTemp}° C</span>
      </div>
    </div>
  );
};

export default WeatherInfo;
