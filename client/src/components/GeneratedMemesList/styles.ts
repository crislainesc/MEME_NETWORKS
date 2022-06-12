import styled from "styled-components";

interface IMemeImageTextProps {
  textTransfrom: boolean;
  isBottom?: boolean;
}

export const GeneratedMemesListContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

export const MemeImageContainer = styled.div`
  width: 9.5rem;
  height: 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const MemeImageTextContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1000;
`;

export const MemeImageText = styled.p<IMemeImageTextProps>`
  padding: 0.25rem;
  width: 9.5rem;
  margin: 2px;
  text-align: center;
  color: white;
  text-transform: ${({ textTransfrom }) => (textTransfrom ? "uppercase" : "")};
  font-size: 8px;
  font-weight: bold;
  z-index: 1000;
`;

export const MemeImage = styled.img`
  width: 100%;
  height: 9rem;
  border: 5px solid white;
  border-radius: 10px;
  object-fit: cover;
  position: relative;
  z-index: -1;
`;
