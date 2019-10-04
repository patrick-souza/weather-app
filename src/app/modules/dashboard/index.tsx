import React, { useEffect } from "react";
import { CurrentWeather } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../../redux-tools/ducks";
import {
  fetchWeather,
  fetchWeatherError
} from "../../redux-tools/ducks/weather";

export function Dashboard() {
  const { currentWeather, isLoading } = useSelector(
    (state: IApplicationState) => state.weather
  );
  const dispatch = useDispatch();

  const { weather = [], name: city } = currentWeather;
  const [weatherAtCurrentLocation] = weather;

  useEffect(() => {
    const getCurrentLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            dispatch(fetchWeather(latitude, longitude));
          },
          err => fetchWeatherError(err.message),
          { enableHighAccuracy: true }
        );
      }
    };
    getCurrentLocation();
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>is Loading...</div>}
      {city && weatherAtCurrentLocation && (
        <CurrentWeather
          city={city}
          description={weatherAtCurrentLocation.description}
          icon={weatherAtCurrentLocation.icon}
        />
      )}
    </div>
  );
}
