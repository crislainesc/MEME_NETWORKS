import ReactLoading from "react-loading";

import { theme } from "@shared/styles";

import * as S from "./styles";

const Loading = () => {
  return (
    <S.LoadingContainer>
      <ReactLoading
        type="spin"
        color={theme.colors.primary[400]}
        height={25}
        width={50}
      />
    </S.LoadingContainer>
  );
};

export default Loading;
