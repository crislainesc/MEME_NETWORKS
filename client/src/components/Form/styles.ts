import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50%;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
`;

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  border: 2px solid ${({ theme }) => theme.colors.neutral[999]};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.montserrat};
`;
