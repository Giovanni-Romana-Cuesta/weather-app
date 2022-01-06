import React, { useEffect, useState } from 'react';
import { convertUnixDate } from './utils/utils';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=${API_KEY}`;

  const [data, setData] = useState({});

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="weather-container">
        <input type="text" className="search-box" placeholder="Search" />
      </div>
    </div>
  );
}

export default App;
