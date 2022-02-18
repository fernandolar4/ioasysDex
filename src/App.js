import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import darkTheme from "./styles/darkTheme";
import GlobalStyles from "./styles/global";
import React, { useState } from "react";

function App() {
  return (
    <Router>
      {/* <ThemeProvider theme={if localStorage.getItem('theme') === 'light' {theme} else{darkTheme}} />}> */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
