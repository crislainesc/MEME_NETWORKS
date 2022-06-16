import { Routes, Route, BrowserRouter } from "react-router-dom";

import {
  CreateMemeForm,
  CreateMemeList,
  GeneratedMemes,
  Home,
  Login,
  MemeDetails,
  RecentMemes,
} from "@pages";

const RoutesContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-meme" element={<CreateMemeList />} />
        <Route path="/recent-memes" element={<RecentMemes />} />
        <Route
          path="/create-meme/:character/:id"
          element={<CreateMemeForm />}
        />
        <Route
          path="/view-generated-memes/:name/:character/:id"
          element={<GeneratedMemes />}
        />
        <Route
          path="/view-meme/:character/:id/:key"
          element={<MemeDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesContainer;
