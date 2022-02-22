import styled from "styled-components";

export const Linha = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  max-width: 830px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.LightGray};
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Links = styled.div`
  max-width: 830px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 55px auto;
  @media (max-width: 900px) {
    max-width: 80;
  }
`;
