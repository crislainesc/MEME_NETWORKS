import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";

import { Button, GeneratedMemesList, Header, Waiting } from "@components";

import { Container, InfoContainer, Text, theme } from "@shared/styles";

const RecentMemes: React.FC = () => {
  const [loadedMemes, setLoadedMemes] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:4000");

    newSocket.on("show", (requestResponse: any) => {
      const { response } = requestResponse;
      const memes: any = [];
      Object.keys(response).map((character) => {
        Object.keys(response[character]).map((memeId) => {
          Object.keys(response[character][memeId]).map((key) => {
            const meme = {
              id: memeId,
              person: character,
              key: key,
              ...response[character][memeId][key],
            };
            memes.push(meme);
          });
        });
      });
      setLoadedMemes(memes);
    });

    setSocket(newSocket);
  }, []);

  const goToCreateMemeHandler = () => {
    navigate("/create-meme");
  };

  if (!socket || !loadedMemes) {
    return <Waiting />;
  }

  if (socket) {
    socket.emit("request", { requestId: 5, operation: "show", key: null });
  }

  return (
    <Container>
      <Header />
      <InfoContainer>
        <Text fontSize={2} fontWeight="700" color={theme.colors.neutral[500]}>
          Memes Recentes
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
      <GeneratedMemesList memes={loadedMemes} />
    </Container>
  );
};

export default RecentMemes;
