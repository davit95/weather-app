import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL, CLEAR_ERRORS, ADD_ERRORS
} from '../constants/weather';

const initialState = {
  weather: {},
  loading: false,
  errors : null
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        errors  : action.payload,
        loading : false,
        weather: {}
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather : action.payload,
        loading : false
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null
      };
    case ADD_ERRORS:
      return {
        ...state,
        errors : action.payload,
        weather: {}
      };
    default:
      return state;
  }
}

export default weatherReducer;
