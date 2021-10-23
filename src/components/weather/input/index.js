import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, clearErrors, addErrors } from '../../../redux/actions/weatherActions';
import './index.css';

const SearchInput = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector(state => state.weather);
  const [cityName, setCityName] = useState('');

  const handleInputChange = event => {
    if (errors) {
      dispatch(clearErrors());
    }
    setCityName(event.target.value);
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    dispatch(clearErrors());
    if (cityName) {
      let modifiedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
      dispatch(getWeather(modifiedCityName));
      setCityName('');
    } else {
      dispatch(addErrors('City name can not be empty'));
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        value={cityName}
        onChange={handleInputChange}
        className='input'
        placeholder='type city name ...'
      />
      <button className='searchButton'>Search</button>
      {
        errors && <p className='inputError'>{errors}</p>
      }
    </form>
  )
}

export default SearchInput;
