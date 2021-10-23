import {
  GET_WEATHER_FAIL,
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  CLEAR_ERRORS,
  ADD_ERRORS
} from '../constants/weather';
import { API_KEY } from '../../env';

export const getWeatherRequest = () => ({
  type: GET_WEATHER_REQUEST
});

export const getWeatherFail = error => ({
  type: GET_WEATHER_FAIL,
  payload: error
});

export const getWeatherSuccess = data => ({
  type: GET_WEATHER_SUCCESS,
  payload: data
});

export const getWeather = cityName => async (dispatch) => {
  try {
    dispatch(getWeatherRequest())
    const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${API_KEY}`);
    const forecastInfo = await result.json();
    if (forecastInfo.cod !== '200') {
      dispatch(getWeatherFail(forecastInfo.message));
    } else {
      dispatch(getWeatherSuccess(forecastInfo));
    }
  } catch (error) {
    dispatch(getWeatherFail(error.message));
  }
};

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
};

export const addErrors = (message) => dispatch => {
  dispatch({
    type: ADD_ERRORS,
    payload: message
  })
};
