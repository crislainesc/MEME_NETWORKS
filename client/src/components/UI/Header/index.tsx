import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Logo";

import { theme } from "@shared/styles";

import * as S from "./styles";

const Header: React.FC = ({}) => {
  return (
    <S.HeaderContainer>
      <Logo color={theme.colors.neutral["000"]} fontSize={2.2} navigateToHome />
      <S.NavigationContainer>
        <Link to="/create-meme">Criar Meme</Link>
        <Link to="/recent-memes">Memes Recentes</Link>
        <Link to="/home">Sair</Link>
      </S.NavigationContainer>
    </S.HeaderContainer>
  );
};

export default Header;
