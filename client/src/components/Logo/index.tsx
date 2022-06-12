import { useNavigate, useParams } from "react-router-dom";

import { Text, theme } from "@shared/styles";

import * as S from "./styles";

const Logo: React.FC<{
  color: string;
  fontSize: number;
  navigateToHome?: boolean;
}> = ({ color, fontSize, navigateToHome }) => {
  const navigate = useNavigate();
  const url = useParams();

  const goToHomeHandler = () => {
    if (navigateToHome) {
      navigate("/home");
    }
  };

  return (
    <S.LogoContainer onClick={goToHomeHandler}>
      <Text
        fontSize={fontSize}
        color={color}
        fontWeight="bold"
        fontFamily={theme.fonts.bangers}
      >
        MEME NETWORKS
      </Text>
    </S.LogoContainer>
  );
};

export default Logo;
