import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";
import GlobalStyles from "./styles/global";
import React, { useState } from "react";
import { TemaContext } from "./TemaContext";

function App() {
  const [tema, setTema] = useState(lightTheme);
  const toggleTheme = () => {
    setTema(tema.title === "lightTheme" ? darkTheme : lightTheme);
  };
  return (
    <Router>
      <ThemeProvider theme={tema}>
        <TemaContext.Provider value={toggleTheme}>
          <GlobalStyles />
          <Routes />
        </TemaContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
