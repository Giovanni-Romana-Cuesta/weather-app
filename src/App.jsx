import React, { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';

function App() {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  return (
    <div className="container">
      <main
        className={
          typeof data.main != 'undefined'
            ? data.main.temp > 16
              ? 'weather-container warm-bg'
              : 'weather-container'
            : 'weather-container'
        }>
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <div>
          {typeof data.main != 'undefined' ? (
            <WeatherInfo
              city={data.name}
              date={data.dt}
              country={data.sys.country}
              icon={data.weather[0].icon}
              description={data.weather[0].description}
              temp={data.main.temp}
              minTemp={data.main.temp_min}
              maxTemp={data.main.temp_max}
            />
          ) : (
            ''
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
