import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8vh;
  background-color: ${({ theme }) => theme.colors.neutral[500]};
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary[300]};
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 3rem;
`;

export const NavigationContainer = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  & a {
    color: ${({ theme }) => theme.colors.primary[300]};
    font-weight: 700;
  }

  & a:active {
    color: ${({ theme }) => theme.colors.neutral["000"]};
  }
`;
