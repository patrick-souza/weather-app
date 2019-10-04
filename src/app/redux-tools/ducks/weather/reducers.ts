import {
  WeatherActionTypes,
  IWeatherState,
  ICurrenWeather,
  ILocation
} from "./types";
import { IReducerAction } from "..";

export const initialState: IWeatherState = {
  currentWeather: {} as ICurrenWeather,
  apiErrors: [],
  isLoading: false
};
export const weatherReducer = (
  state = initialState,
  action: IReducerAction<ILocation | ICurrenWeather | string>
): IWeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER: {
      return { ...state, isLoading: true };
    }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentWeather: action.payload as ICurrenWeather
      };
    }
    case WeatherActionTypes.FETCH_WEATHER_ERROR: {
      return {
        ...state,
        isLoading: false,
        apiErrors: [...state.apiErrors, action.payload as string]
      };
    }
    default:
      return state;
  }
};
