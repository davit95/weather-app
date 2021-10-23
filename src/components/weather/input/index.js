import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather, clearErrors } from '../../../redux/actions/weatherActions';
import './index.css';

const cityValidationRegex = /^[a-zA-Z',.\s-]{1,25}$/g;

const SearchInput = () => {
  const dispatch = useDispatch();
  const { errors } = useSelector(state => state.weather);
  const [cityName, setCityName] = useState('');
  const [inputError, setInputError] = useState(null);

  const handleInputChange = event => {
    setInputError(null);
    setCityName(event.target.value);
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    dispatch(clearErrors());
    if (cityValidationRegex.test(cityName)) {
      let modifiedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
      dispatch(getWeather(modifiedCityName));
      setInputError(null);
      setCityName('');
    } else {
      setInputError('Please add valid city name');
    }
  }

  let error = inputError || errors;

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
        error && <p className='inputError'>{error}</p>
      }
    </form>
  )
}

export default SearchInput;
