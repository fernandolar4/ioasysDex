import styled from "styled-components";

export const Div = styled.div`
  a {
    display: flex;
    align-items: center;
    align-content: center;
    margin-left: 11.5px;
    color: ${({ theme }) => theme.colors.Ioasys};
    font-size: 16px;
    text-decoration: none;
    @media (max-width: 900px) {
      font-size: 18px;
      
    }
    img {
      margin-right: 12px;
      height: 18px;
    }
  }
  }
  
`;
