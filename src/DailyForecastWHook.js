import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const DailyForecastWHook = () => {
  const [forecasts, setForecasts] = useState([]);
  const [iSLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/337235?apikey=frE0GLIjCKs13y4iOygcPpDlDkmCNLpL`
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
  }, []);

  return (
    <div className='parent'>
      {iSLoading ? (
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
