import React, { useEffect } from "react";
import API from "../../services/api.service";

export function Dashboard() {
  useEffect(() => {
    const fetch = async () =>
      API.get("weather?q=sorocaba&units=metric").then(console.log);

    fetch();
  }, []);
  return <div />;
}
