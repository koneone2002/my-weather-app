import React from 'react';
import DailyForecastWHook from './DailyForecastWHook';

const WeatherCards = () => {
  return (
    <div className='container'>
      <h1 className='mainTitle'>This is The Weather App</h1>
      <h2 className='cityTitle'>The Weather for San Mateo is: </h2>
      <div>
        <DailyForecastWHook className='card' />
      </div>
    </div>
  );
};

export default WeatherCards;
