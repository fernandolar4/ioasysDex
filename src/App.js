import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import darkTheme from "./styles/darkTheme";
import GlobalStyles from "./styles/global";
import React, { useState } from "react";
import { TemaContext } from "./TemaContext";

function App() {
  const [tema, setTema] = useState(theme);
  const toggleTheme = () => {
    setTema(tema.title === "theme" ? darkTheme : theme);
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
