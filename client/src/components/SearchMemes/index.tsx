import { useState } from "react";

import Button from "../UI/Button";

import { Text, theme } from "@shared/styles";

import * as S from "./styles";

const Search: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const submitHandler = () => {
    if (!query) {
      alert("Por favor informe um nome");
      return;
    }
    onSearch(query);
  };

  return (
    <S.SearchContainer>
      <Text fontSize={1.3} fontWeight="700" color={theme.colors.neutral[500]}>
        Solte sua criatividade! Crie memes personalizados de forma simples.
      </Text>
      <S.InputContainer>
        <S.Input
          placeholder="Digite um nome. Ex: Chapolin"
          type="text"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <Button
          backgroundColor={theme.colors.primary[300]}
          height={1.8}
          width={7}
          borderRadius={4}
          onClick={submitHandler}
        >
          <Text
            fontWeight="700"
            fontSize={1}
            color={theme.colors.neutral["000"]}
          >
            Buscar
          </Text>
        </Button>
      </S.InputContainer>
    </S.SearchContainer>
  );
};

export default Search;
