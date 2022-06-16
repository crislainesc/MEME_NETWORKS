import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";

import { Header, Button, Waiting } from "@components";

import { Container, InfoContainer, Text, theme } from "@shared/styles";

import * as S from "./styles";

const MemeDetails: React.FC = () => {
  const [loadedMeme, setLoadedMeme] = useState<any>(null);
  const [socket, setSocket] = useState<any>(null);

  const { character, id, key } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:4000");

    newSocket.on("showWithKey", (requestResponse) => {
      const { response } = requestResponse;
      response.id = id;
      setLoadedMeme(response);
    });
    setSocket(newSocket);
  }, []);

  const goToCreateMemeHandler = () => {
    navigate("/create-meme");
  };

  if (socket) {
    socket.emit("request", {
      requestId: 4,
      operation: "showWithKey",
      key: `${character}/${id}/${key}`,
    });
  }

  if (!socket || !loadedMeme) {
    return <Waiting />;
  }

  return (
    <Container>
      <Header />
      <InfoContainer>
        <Text fontSize={2} fontWeight="700" color={theme.colors.neutral[500]}>
          Ver Meme
        </Text>
        <Button
          width={9}
          height={2.5}
          backgroundColor={theme.colors.primary[300]}
          borderRadius={4}
          onClick={goToCreateMemeHandler}
        >
          <Text
            fontSize={1}
            fontWeight="700"
            color={theme.colors.neutral["000"]}
          >
            Criar Meme
          </Text>
        </Button>
      </InfoContainer>
      <S.MemeImageContainer>
        <S.MemeImageText
          fontSize={loadedMeme.topTextSize}
          textTransfrom={loadedMeme.capitalLetters}
        >
          {loadedMeme.topText}
        </S.MemeImageText>
        <S.MemeImage src={loadedMeme.url!} />
        <S.MemeImageText
          fontSize={loadedMeme.buttonTextSize}
          textTransfrom={loadedMeme.capitalLetters}
          isButton
        >
          {loadedMeme.buttonText}
        </S.MemeImageText>
      </S.MemeImageContainer>
    </Container>
  );
};

export default MemeDetails;
