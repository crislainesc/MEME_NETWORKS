import { ListMemesProps } from "@shared/types";

import { Text, theme } from "@shared/styles";

import Button from "../UI/Button";

import * as S from "./styles";

const ListMemes: React.FC<ListMemesProps> = ({
  memes,
  createMeme,
  showViewGeneratedMemes,
  viewGeneratedMemes,
}) => {
  return (
    <S.ListMemesContainer>
      {memes.map((meme) => (
        <S.MemeContainer key={meme.id}>
          <S.MemeImage src={meme.url} />
          <Text fontSize={1} fontWeight="500" color={theme.colors.neutral[500]}>
            {meme.name}
          </Text>
          <Button
            width={9.5}
            height={1.8}
            backgroundColor={theme.colors.primary[400]}
            borderRadius={4}
            onClick={() => createMeme(meme.person, meme.id)}
          >
            <Text
              fontSize={0.8}
              fontWeight="700"
              color={theme.colors.neutral["000"]}
            >
              Criar Meme
            </Text>
          </Button>
          {showViewGeneratedMemes && (
            <Button
              width={9.5}
              height={1.5}
              backgroundColor={theme.colors.primary[300]}
              borderRadius={4}
              onClick={() =>
                viewGeneratedMemes(meme.name, meme.person, meme.id)
              }
            >
              <Text
                fontSize={0.7}
                fontWeight="700"
                color={theme.colors.neutral["000"]}
              >
                Ver Memes Criados
              </Text>
            </Button>
          )}
        </S.MemeContainer>
      ))}
    </S.ListMemesContainer>
  );
};

export default ListMemes;
