import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import socketIOClient from "socket.io-client";

import { CreateMeme, Header, Waiting } from "@components";

import { IMemeCreated } from "@shared/interfaces";

import { Container, InfoContainer, Text, theme } from "@shared/styles";

const CreateMemeForm: React.FC = () => {
  const [loadedMeme, setLoadedMeme] = useState<any>(null);
  const [socket, setSocket] = useState<any>(null);
  const [waitingCreateMeme, setWaitingCreateMeme] = useState<boolean>(false);

  const { character, id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:4000");

    newSocket.on("searchWithKey", (requestResponse) => {
      const { response } = requestResponse;
      response.id = id;
      setLoadedMeme(response);
    });
    setSocket(newSocket);
  }, []);

  const createMemeHandler = (meme: IMemeCreated) => {
    setWaitingCreateMeme(true);
    socket.emit("request", {
      requestId: 3,
      operation: "create",
      key: `${character}/${id}`,
      body: meme,
    });

    socket.on("create", (requestResponse: any) => {
      const { status } = requestResponse;

      if (status === "ok") {
        setWaitingCreateMeme(false);
        alert("Imagem gerada com sucesso");
        navigate("/recent-memes");
      }

      if (status === "not saved") {
        setWaitingCreateMeme(false);
        alert("Imagem gerada com sucesso");
        navigate("/home");
      }
    });
  };

  if (socket) {
    socket.emit("request", {
      requestId: 1,
      operation: "searchWithKey",
      key: `${character}/${id}`,
    });
  }

  if (!socket || !loadedMeme) {
    return <Waiting />;
  }

  if (waitingCreateMeme) {
    return <Waiting message="A imagem está sendo gerada, por favor aguade" />;
  }

  return (
    <Container>
      <Header />
      <InfoContainer>
        <Text fontSize={2.3} fontWeight="700" color={theme.colors.neutral[500]}>
          Criar Meme
        </Text>
        <Text fontSize={1.3} fontWeight="600" color={theme.colors.neutral[500]}>
          Solte sua criatividade! Crie memes personalizados de forma simples.
        </Text>
      </InfoContainer>
      <CreateMeme
        meme={loadedMeme}
        character={character!}
        createMeme={createMemeHandler}
      />
    </Container>
  );
};

export default CreateMemeForm;
