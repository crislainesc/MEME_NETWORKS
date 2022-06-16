import styled from "styled-components";

interface IMemeImageTextProps {
  fontSize: number;
  textTransfrom: boolean;
  isButton?: boolean;
}

export const MemeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 25rem;
  border: 7px solid white;
  border-radius: 10px;
  margin-top: 1rem;
`;

export const MemeImageText = styled.p<IMemeImageTextProps>`
  width: 23rem;
  margin: 2px;
  text-align: center;
  color: white;
  position: absolute;
  text-transform: ${({ textTransfrom }) => (textTransfrom ? "uppercase" : "")};
  font-size: ${({ fontSize }) => (fontSize < 50 ? `${fontSize}px` : `50px`)};
  font-weight: bold;
  bottom: ${({ isButton }) => (isButton ? "30px" : null)};
`;

export const MemeImage = styled.img`
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
`;
