import React from 'react';
import { useSelector } from 'react-redux';
import ForecastItem from './items/ForecastItem';
import CityInfo from './city/CityInfo';
import './styles.css';

const Forecast = () => {
  const {
    weather: {
      city: {
        coord: {
          lat,
          lon
        } = {},
        country,
        name
      } = {},
      list = []
    },
    loading,
    weather
  } = useSelector(state => state.weather);
  if (loading) {
    return <p>...loading</p>
  }

  return (
    Object.keys(weather).length ? (
      <>
        <CityInfo
          name={name}
          country={country}
          lat={lat}
          lon={lon}
        />
        {
          list.length && list.slice(0, 20).map((f, i) => <ForecastItem key={i} forecast={f} />)
        }
      </>
    ) : null
  )
}

export default Forecast;
