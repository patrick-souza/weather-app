import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  font-size: 26px;
`;
const Max = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
`;
const Min = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.secondary};
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export { Container, Max, Min, Box };
