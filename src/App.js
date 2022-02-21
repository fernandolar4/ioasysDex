import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

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
        <GlobalStyles />
        <TemaContext.Provider value={toggleTheme}>
          <Routes />
        </TemaContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
