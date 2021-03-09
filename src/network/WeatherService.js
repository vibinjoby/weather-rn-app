import serviceConst from '../config/serviceConst';
import HttpService from './HttpService';

const getWeatherByCity = async (city) => {
  const {BASE_URL, FETCH_WEATHER_BY_CITY} = serviceConst;
  const {data} = await HttpService.get(BASE_URL + FETCH_WEATHER_BY_CITY + city);

  return data;
};

export default {getWeatherByCity};
