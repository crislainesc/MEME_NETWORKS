import styled from "styled-components";

interface ILoginContainerProps {
  background: string;
}

export const LoginContainer = styled.div<ILoginContainerProps>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => `url(${background})`};
`;
