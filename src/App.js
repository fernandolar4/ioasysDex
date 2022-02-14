import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
