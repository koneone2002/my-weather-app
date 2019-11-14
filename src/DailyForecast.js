import React from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';

class DailyForecast extends React.Component {
  state = {
    forecasts: []
  };

  componentDidMount = () => {
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/337235?apikey=frE0GLIjCKs13y4iOygcPpDlDkmCNLpL`
      )
      .then(response => {
        const forecasts = response.data.DailyForecasts;
        this.setState({ forecasts });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { forecasts } = this.state;
    console.log(forecasts);

    return (
      <div className='parent'>
        {forecasts.map(forecast => (
          <WeatherCard key={forecast.EpochDate} forecast={forecast} />
        ))}
      </div>
    );
  }
}
export default DailyForecast;
