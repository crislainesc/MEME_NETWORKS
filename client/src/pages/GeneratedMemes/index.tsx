import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";

import { Header, Button, Waiting, GeneratedMemesList } from "@components";

import { Container, InfoContainer, Text, theme } from "@shared/styles";

import * as S from "./styles";

const GeneratedMemes: React.FC = () => {
  const [loadedMemes, setLoadedMemes] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>(null);

  const { name, character, id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:4000");

    newSocket.on("showWithKey", (requestResponse: any) => {
      const { response, status } = requestResponse;
      if (status === "not found") {
        return;
      } else {
        const memes: any = [];
        Object.keys(response).map((memeId) => {
          const meme = {
            id: id,
            person: character,
            key: memeId,
            ...response[memeId],
          };
          memes.push(meme);
        });
        setLoadedMemes(memes);
      }
    });

    setSocket(newSocket);
  }, []);

  const goToCreateMemeHandler = () => {
    navigate("/create-meme");
  };

  if (!socket && loadedMemes.length === 0) {
    return <Waiting />;
  }

  if (socket) {
    socket.emit("request", {
      requestId: 4,
      operation: "showWithKey",
      key: `${character}/${id}`,
    });
  }

  return (
    <Container>
      <Header />
      <InfoContainer>
        <Text fontSize={2} fontWeight="700" color={theme.colors.neutral[500]}>
          Memes {name}
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
      {loadedMemes.length > 0 && <GeneratedMemesList memes={loadedMemes} />}
      {loadedMemes.length === 0 && (
        <S.NoLoadedMemes>
          <Text fontSize={2} fontWeight="700" color={theme.colors.primary[300]}>
            Ainda não existem memes com essa imagem
          </Text>
        </S.NoLoadedMemes>
      )}
    </Container>
  );
};

export default GeneratedMemes;
