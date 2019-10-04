import { WeatherActionTypes, ILocation, ICurrenWeather } from "./types";
import { action } from "typesafe-actions";
import { IReducerAction } from "..";

const fetchWeather = (
  latitude: number,
  longitude: number
): IReducerAction<ILocation> =>
  action(WeatherActionTypes.FETCH_WEATHER, { latitude, longitude });

const fetchWeatherSuccess = (
  data: ICurrenWeather
): IReducerAction<ICurrenWeather> =>
  action(WeatherActionTypes.FETCH_WEATHER_SUCCESS, data);

const fetchWeatherError = (message: string): IReducerAction<string> => {
  console.log(message);
  return action(WeatherActionTypes.FETCH_WEATHER_ERROR, message);
};

export { fetchWeather, fetchWeatherSuccess, fetchWeatherError };
