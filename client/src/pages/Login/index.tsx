import React from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "@components";

import background from "@assets/background.png";

import * as S from "./styles";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onLoginHandler = (name: string) => {
    navigate("/home");
  };

  return (
    <S.LoginContainer background={background}>
      <Form onSubmit={onLoginHandler} />
    </S.LoginContainer>
  );
};

export default Login;
