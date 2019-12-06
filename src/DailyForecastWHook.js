import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WeatherCard from './WeatherCard';

const DailyForecastWHook = () => {
  const [forecasts, setForecasts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // hardcode the key for San Mateo, so we don't get a 400 error for undefined initial state of key
  const [key, setKey] = useState(337235);

  useEffect(() => {
    setLoading(true);
    const getKey = () => {
      axios
        .get(
          `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=frE0GLIjCKs13y4iOygcPpDlDkmCNLpL&q=San%20Mateo%2C%20Ca`
        )
        .then(response => {
          const key = response.data[0].Key;
          setKey(key);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getKey();
    const getForecast = () => {
      axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=frE0GLIjCKs13y4iOygcPpDlDkmCNLpL`
        )
        .then(response => {
          const forecasts = response.data.DailyForecasts;
          setForecasts(forecasts);
        })
        .finally(() => {
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getForecast();
  }, [key]);

  return (
    <div className='parent'>
      {isLoading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <>
          {forecasts.map(forecast => (
            <WeatherCard key={forecast.EpochDate} forecast={forecast} />
          ))}
        </>
      )}
    </div>
  );
};

export default DailyForecastWHook;
