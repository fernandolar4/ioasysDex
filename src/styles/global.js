import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.Background};
    color: ${({ theme }) => theme.colors.Text};


    }
    button {
        border:none;
        cursor: pointer;
    }
    body {
        width: 100%;
        height: 100vh;
    }
    
    `;
