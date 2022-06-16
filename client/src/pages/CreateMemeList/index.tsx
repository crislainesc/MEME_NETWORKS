import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";

import { Header, ListMemes, Search, Waiting } from "@components";

import { Container } from "@shared/styles";

const CreateMemeList: React.FC = () => {
  const [loadedMemes, setLoadedMemes] = useState<any[]>([]);
  const [filteredMemes, setFilteredMemes] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const newSocket = socketIOClient("http://localhost:4000");

    newSocket.on("search", (requestResponse: any) => {
      const { response } = requestResponse;
      const memes: any = [];
      Object.keys(response).map((character) => {
        Object.keys(response[character]).map((memeId) => {
          const meme = {
            id: memeId,
            person: character,
            ...response[character][memeId],
          };
          memes.push(meme);
        });
      });
      setLoadedMemes(memes);
    });

    setSocket(newSocket);
  }, []);

  const searchHandler = (query: string) => {
    setFilteredMemes(loadedMemes.filter((meme) => meme.name === query));
  };

  const createMemeHandler = (name: string, id: string) => {
    navigate(`/create-meme/${name}/${id}`);
  };

  const viewGeneratedMemes = (name: string, character: string, id: string) => {
    navigate(`/view-generated-memes/${name}/${character}/${id})`);
  };

  if (!socket || !loadedMemes) {
    return <Waiting />;
  }

  if (socket) {
    socket.emit("request", { requestId: 2, operation: "search", key: null });
  }

  return (
    <Container>
      <Header />
      <Search onSearch={searchHandler} />
      <ListMemes
        memes={filteredMemes.length > 0 ? filteredMemes : loadedMemes}
        createMeme={createMemeHandler}
        viewGeneratedMemes={viewGeneratedMemes}
        showViewGeneratedMemes={false}
      />
    </Container>
  );
};

export default CreateMemeList;
