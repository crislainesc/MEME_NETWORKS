import { useRef, useState } from "react";

import doge from "@assets/doge.png";

import Logo from "../Logo";
import Button from "../UI/Button";

import { Text, theme } from "@shared/styles";

import * as S from "./styles";

const Form: React.FC<{ onSubmit: (name: string) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const submitHandler = () => {
    if (!name) {
      alert("Por favor informe um nome");
      return;
    }
    onSubmit(name);
  };

  return (
    <S.FormContainer>
      <S.FormContent>
        <Logo fontSize={3} color={theme.colors.neutral[800]} />
        <Text fontSize={1} fontWeight="700" color={theme.colors.primary[400]}>
          Um website para gerar memes personalizados onde você pode escolher uma
          imagem e soltar a criatividade
        </Text>
        <S.Input
          placeholder="Digite seu nome"
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <Button
          backgroundColor={theme.colors.primary[300]}
          height={2.5}
          width={25}
          borderRadius={4}
          onClick={submitHandler}
        >
          <Text
            fontWeight="700"
            fontSize={1}
            color={theme.colors.neutral["000"]}
          >
            Entrar
          </Text>
        </Button>
      </S.FormContent>
      <img src={doge} />
    </S.FormContainer>
  );
};

export default Form;
