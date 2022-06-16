import styled from "styled-components";

interface ITextProps {
  fontSize: number;
  fontWeight: string;
  color?: string;
  fontFamily?: string;
  background?: string;
}

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Text = styled.p<ITextProps>`
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  font-family: ${({ fontFamily }) =>
    fontFamily ? `${fontFamily}` : "inherit"};
  color: ${({ color }) => `${color}`};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TextGradient = styled.p<ITextProps>`
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  font-family: ${({ fontFamily }) =>
    fontFamily ? `${fontFamily}` : "inherit"};
  color: ${({ color }) => `${color}`};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-image: ${({ background }) => `${background}`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
