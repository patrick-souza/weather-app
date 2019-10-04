export type IWeatherState = {
  readonly currentWeather: ICurrenWeather;
  readonly isLoading: boolean;
  readonly apiErrors: string[];
};

export type ICurrenWeather = {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  name: string;
  dt: number;
};
export type ApiResponse = ICurrenWeather;

export type ILocation = {
  longitude: number;
  latitude: number;
};

export const WeatherActionTypes = {
  FETCH_WEATHER: "@@weather/FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS: "@@weather/FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR: "@@weather/FETCH_WEATHER_ERROR"
};
