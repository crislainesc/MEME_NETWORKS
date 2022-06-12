import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  width: 40%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.neutral[999]};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  padding-right: 0.25rem;
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
`;
