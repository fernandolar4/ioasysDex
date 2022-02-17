import styled from "styled-components";

export const GoBack = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.MediumGray};
    display: flex;
    align-items: center;
    text-align: center;
    img {
      margin-right: 12px;
      height: 18px;
    }
  }
`;
