import React from 'react';
import axios from 'axios';

export const getKey = () => {
  axios
    .get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=frE0GLIjCKs13y4iOygcPpDlDkmCNLpL&q=Florence&alias=Firenze`
    )
    .then(response => {
      const key = response.data[0].Key;
      setKey(key);
    })
    .catch(error => {
      console.log(error);
    });
};

export const getForecast = () => {
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
