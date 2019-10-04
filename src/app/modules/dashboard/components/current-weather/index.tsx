import React from "react";
import { Container, City, Description, Temperature } from "./styles";
import { roundTemperature } from "../../../../utils/round";

type IProps = {
  city: string;
  description: string;
  temperature: number;
};
export function CurrentWeather(props: IProps): JSX.Element {
  return (
    <Container>
      <City>{props.city}</City>
      <Description>{props.description}</Description>
      <Temperature>{roundTemperature(props.temperature)}°</Temperature>
    </Container>
  );
}
