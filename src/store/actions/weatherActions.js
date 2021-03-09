import service from '../../network/WeatherService';
import {WEATHER_DETAILS} from './types';
import setLoading from '../../utils/loadingManager';
import routes from '../../navigations/routes';

export const getWeatherByCity = (city, toastCtx, navigation) => async (
  dispatch,
) => {
  try {
    setLoading(true);
    const {data} = await service.getWeatherByCity(city);
    dispatch({type: WEATHER_DETAILS, payload: data});
    navigation.navigate(routes.VIEW_DETAILS);
    setLoading(false);
  } catch (error) {
    toastCtx.showErrorToast(error?.toString());
    console.log(error);
  }
  setLoading(false);
};
