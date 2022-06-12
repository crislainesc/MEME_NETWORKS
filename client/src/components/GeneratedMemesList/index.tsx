import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const GeneratedMemesList: React.FC<{ memes: any }> = ({ memes }) => {
  const navigate = useNavigate();

  const goToMemeDetails = (character: string, id: string, key: string) => {
    navigate(`/view-meme/${character}/${id}/${key}`);
  };

  return (
    <S.GeneratedMemesListContainer>
      {memes.map((meme: any) => {
        return (
          <S.MemeImageContainer
            key={meme.key}
            onClick={() => goToMemeDetails(meme.character, meme.id, meme.key)}
          >
            <S.MemeImage src={meme.url} />
            <S.MemeImageTextContainer>
              <S.MemeImageText textTransfrom={meme.capitalLetters}>
                {meme.topText}
              </S.MemeImageText>
              <S.MemeImageText textTransfrom={meme.capitalLetters} isBottom>
                {meme.buttonText}
              </S.MemeImageText>
            </S.MemeImageTextContainer>
          </S.MemeImageContainer>
        );
      })}
    </S.GeneratedMemesListContainer>
  );
};

export default GeneratedMemesList;
