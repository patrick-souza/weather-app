import React, { useEffect } from "react";
import API from "../../services/api.service";
import { CurrentWeather } from "./components";

export function Dashboard() {
  useEffect(() => {
    const fetch = async () =>
      API.get("weather?q=sorocaba&units=metric&lang=pt_br").then(console.log);

    fetch();
  }, []);
  return (
    <div>
      <CurrentWeather
        city={currentWeather.city}
        description={currentWeather.description}
        icon={CurrentWeather.icon}
      />
    </div>
  );
}
