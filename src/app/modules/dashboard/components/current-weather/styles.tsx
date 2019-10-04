import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  color: ${props => props.theme.colors.primary};
`;

const City = styled.span`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1.5px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 2;
`;

const Temperature = styled.span`
  font-size: 72px;
`;

export { Container, City, Description, Temperature };
