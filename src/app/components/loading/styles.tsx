import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  font-size: 36px;
`;

export { Loading };
