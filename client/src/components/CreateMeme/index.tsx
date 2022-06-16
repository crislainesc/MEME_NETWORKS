import { useState } from "react";

import Button from "../UI/Button";

import { IMemeCreated } from "@shared/interfaces";

import { Text, theme } from "@shared/styles";

import * as S from "./styles";

const CreateMeme: React.FC<{
  meme: any;
  character: string;
  createMeme: (meme: IMemeCreated) => void;
}> = ({ meme, character, createMeme }) => {
  const [topText, setTopText] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [topTextFontSize, setTopTextFontSize] = useState<number>(15);
  const [buttonTextFontSize, setButtonTextFontSize] = useState<number>(15);
  const [capitalLetters, setCapitalLetters] = useState(false);

  const createMemeHandler = (
    id: string,
    name: string,
    url: string,
    character: string,
    topText: string,
    topTextSize: number,
    buttonText: string,
    buttonTextSize: number,
    capitalLetters: boolean
  ) => {
    const meme = {
      id,
      name,
      url,
      character,
      topText,
      topTextSize,
      buttonText,
      buttonTextSize,
      capitalLetters,
    };
    createMeme(meme);
  };

  return (
    <S.CreateMemeContainer>
      <S.MemeImageContainer>
        <S.MemeImageText
          fontSize={topTextFontSize}
          textTransfrom={capitalLetters}
        >
          {topText}
        </S.MemeImageText>
        <S.MemeImage src={meme.url} />
        <S.MemeImageText
          fontSize={buttonTextFontSize}
          textTransfrom={capitalLetters}
          isButton
        >
          {buttonText}
        </S.MemeImageText>
      </S.MemeImageContainer>
      <S.CreateMemeForm onSubmit={(event) => event.preventDefault()}>
        <Text fontSize={1.5} fontWeight="600" color={theme.colors.primary[400]}>
          Digite as frases
        </Text>
        <Text fontSize={1} fontWeight="400" color={theme.colors.neutral[500]}>
          Texto superior
        </Text>
        <input type="text" onChange={(e) => setTopText(e.target.value)} />
        <div>
          <Button
            backgroundColor={theme.colors.primary[300]}
            width={10}
            height={2.3}
            borderRadius={4}
            onClick={() => setTopTextFontSize(topTextFontSize + 1)}
          >
            <Text
              fontSize={0.87}
              fontWeight="600"
              color={theme.colors.neutral["000"]}
            >
              + Aumentar Texto
            </Text>
          </Button>
          <Button
            backgroundColor={theme.colors.primary[300]}
            width={10}
            height={2.3}
            borderRadius={4}
            onClick={() => setTopTextFontSize(topTextFontSize - 1)}
          >
            <Text
              fontSize={0.87}
              fontWeight="600"
              color={theme.colors.neutral["000"]}
            >
              - Diminuir Texto
            </Text>
          </Button>
        </div>
        <Text fontSize={1} fontWeight="400" color={theme.colors.neutral[500]}>
          Texto inferior
        </Text>
        <input type="text" onChange={(e) => setButtonText(e.target.value)} />
        <div>
          <Button
            backgroundColor={theme.colors.primary[300]}
            width={10}
            height={2.3}
            borderRadius={4}
            onClick={() => setButtonTextFontSize(buttonTextFontSize + 1)}
          >
            <Text
              fontSize={0.87}
              fontWeight="600"
              color={theme.colors.neutral["000"]}
            >
              + Aumentar Texto
            </Text>
          </Button>
          <Button
            backgroundColor={theme.colors.primary[300]}
            width={10}
            height={2.3}
            borderRadius={4}
            onClick={() => setButtonTextFontSize(buttonTextFontSize - 1)}
          >
            <Text
              fontSize={0.87}
              fontWeight="600"
              color={theme.colors.neutral["000"]}
            >
              - Diminuir Texto
            </Text>
          </Button>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => setCapitalLetters(!capitalLetters)}
          />
          <Text fontSize={1} fontWeight="400" color={theme.colors.neutral[500]}>
            Deixar frases MAIÚSCULAS
          </Text>
        </div>
        <Button
          backgroundColor={theme.colors.primary[400]}
          width={20.5}
          height={2.3}
          borderRadius={4}
          onClick={() =>
            createMemeHandler(
              meme.id,
              meme.name,
              meme.url,
              character,
              topText,
              topTextFontSize,
              buttonText,
              buttonTextFontSize,
              capitalLetters
            )
          }
        >
          <Text
            fontSize={1}
            fontWeight="600"
            color={theme.colors.neutral["000"]}
          >
            Criar Meme
          </Text>
        </Button>
      </S.CreateMemeForm>
    </S.CreateMemeContainer>
  );
};

export default CreateMeme;
