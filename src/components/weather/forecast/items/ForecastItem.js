import React from 'react';
import './forecastItem.css';

const ForecastItem = ({ forecast }) => {
  const {
    main: {
      temp,
      sea_level
    },
    dt_txt,
    visibility,
    wind: {
      speed
    }
  } = forecast;
  return (
    <div className='forecastItemContainer'>
      <div className='forecastItem'>
        <h2>Date</h2>
        <p>{dt_txt}</p>
      </div>
      <div className='forecastItem'>
        <h2>Temp</h2>
        <p>{Math.floor(temp - 273)} °C</p>
      </div>
      <div className='forecastItem'>
        <h2>Wind Speed</h2>
        <p>{speed}</p>
      </div>
      <div className='forecastItem'>
        <h2>Visibility</h2>
        <p>{visibility}</p>
      </div>
      <div className='forecastItem'>
        <h2>Sea Level</h2>
        <p>{sea_level}</p>
      </div>
    </div>
  )
}

export default ForecastItem;
