import styled from "styled-components";

// export const Button = styled.button``;

export const Div = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  img {
    max-height: 19px;
  }

  a {
    margin-left: 11.5px;
    color: ${({ theme }) => theme.colors.Ioasys};
    font-size: 16px;
    background-color: transparent;
    text-decoration: none;
    font-weight: 500;
  }
`;
