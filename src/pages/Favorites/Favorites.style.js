import styled from "styled-components";

export const PageContainer = styled.div`
  .mobileOnlyButton {
    display: flex;
    align-items: center;
    justify-content: center;
    .backbutton {
      display: none;
      @media (max-width: 900px) {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }
    }
  }
`;

export const Linha = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  max-width: 830px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.LightGray};
  opacity: 0.5;
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
  div {
    .backbutton {
      @media (max-width: 900px) {
        display: none;
      }
    }
  }
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.LightGray};
  border: 10px solid ${({ theme }) => theme.colors.LightGray};
  min-height: 155px;
  opacity: 0.75;
  border-radius: 10px;
  @media (max-width: 900px) {
    min-height: 125px;
  }
`;
