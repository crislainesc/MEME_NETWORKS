import styled from "styled-components";

interface IMemeImageTextProps {
  fontSize: number;
  textTransfrom: boolean;
  isBottom?: boolean;
}

export const CreateMemeContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  gap: 10rem;
  align-items: center;
  justify-content: center;
`;

export const MemeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 25rem;
  border: 7px solid white;
  border-radius: 10px;
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
  bottom: ${({ isBottom }) => (isBottom ? "30px" : null)};
`;

export const MemeImage = styled.img`
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: -1;
`;

export const CreateMemeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 20.5rem;
    height: 2rem;
    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
    padding: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
  }

  input[type="checkbox"] {
    height: 1rem;
    width: 1rem;
  }

  input[type="checkbox"]:checked {
    background-color: red;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`;
