import React, { useEffect } from "react";
import { CurrentWeather, Forecast } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../../redux-tools/ducks";
import {
  fetchWeather,
  fetchWeatherError
} from "../../redux-tools/ducks/weather";
import Loading from "../../components/loading";

export function Dashboard() {
  const { currentWeather, isLoading } = useSelector(
    (state: IApplicationState) => state.weather
  );
  const dispatch = useDispatch();

  const { weather = [], name: city, main } = currentWeather;
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
      {isLoading && <Loading />}
      {city && weatherAtCurrentLocation && (
        <>
          <CurrentWeather
            city={city}
            description={weatherAtCurrentLocation.description}
            temperature={main.temp}
          />
          <Forecast min={main.temp_min} max={main.temp_max} />
        </>
      )}
    </div>
  );
}
