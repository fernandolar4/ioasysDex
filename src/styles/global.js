import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    }
    button {
        border:none;
        cursor: pointer;
    }
    body {
        width: 100%;
        height: 100vh;
        colors: ${({ theme }) => theme.colors.Background}
    }
    
    `;
