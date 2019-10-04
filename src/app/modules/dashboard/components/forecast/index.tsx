import React from "react";
import { Container, Max, Min, Box } from "./styles";
import { roundTemperature } from "../../../../utils/round";
type IProps = {
  min: number;
  max: number;
};
export function Forecast(props: IProps) {
  return (
    <Container>
      <Box>
        <Max>
          <span>Máxima de </span> {roundTemperature(props.max)}°
        </Max>
        <Min>
          <span>Mínima de </span>
          {roundTemperature(props.min)}°
        </Min>
      </Box>
    </Container>
  );
}
