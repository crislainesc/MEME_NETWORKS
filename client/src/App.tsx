import { ThemeProvider } from "styled-components";

import RoutesContainer from "./routes";

import { GlobalStyle, theme } from "@shared/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RoutesContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
