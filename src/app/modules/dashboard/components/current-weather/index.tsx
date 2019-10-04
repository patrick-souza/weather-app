import React from "react";
import { Container, City, Description, Icon } from "./styles";

type IProps = {
  city: string;
  description: string;
  icon: string;
};
export function CurrentWeather(props: IProps): JSX.Element {
  return (
    <Container>
      <City>{props.city}</City>
      <Description>{props.description}</Description>
      <Icon />
    </Container>
  );
}
