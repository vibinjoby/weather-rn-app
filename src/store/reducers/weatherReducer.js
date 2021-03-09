import {WEATHER_DETAILS} from '../actions/types';

const initialState = {
  details: {},
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DETAILS: {
      return {...state, details: action?.payload};
    }
    default:
      return state;
  }
};
export default weatherReducer;
