import React from 'react';
import moment from 'moment';
import FadeIn from 'react-fade-in';

const WeatherCard = ({ forecast }) => {
  const { Date, Day, Night, Temperature } = forecast;
  const day = moment(Date).format('dddd');
  const newDate = moment(Date).format('MMMM, Do YYYY');

  return (
    <FadeIn delay='200' transitionDuration='1000'>
      <div className='card'>
        <h2>{day}</h2>
        <h3>{newDate}</h3>
        <h3>{`Max Temperature is: ${Temperature.Maximum.Value}`}</h3>
        <h3>{`Min Temperature is: ${Temperature.Minimum.Value}`}</h3>
        <h3>{`Daytime forecast is: ${Day.IconPhrase}`}</h3>
        <p>{Day.Icon}</p>
        <h3>{`Nightime forecast is: ${Night.IconPhrase}`}</h3>
        <p>{Night.Icon}</p>
      </div>
    </FadeIn>
  );
};

export default WeatherCard;
