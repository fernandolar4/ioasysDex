import styled from "styled-components";

export const CardContainer = styled.div`
  gap: 20px;
  display: grid;
  margin: 70px auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-width: 830px;
  ${
    "" /* @media (min-width: 602px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 902px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1135px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  } */
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.Ioasys};
  border-radius: 10px;

  p {
    font-size: 11px;
    align-self: right;
    color: ${({ theme }) => theme.colors.Ioasys};
    align-self: flex-end;
    margin: 7px 10px 0px 0px;
  }
  img {
    width: 95px;
  }
  div {
    width: 102%;
    height: 102%;
    background-color: ${({ theme }) => theme.colors.Ioasys};
    border-radius: 0px 0px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      background: transparent;
      color: ${({ theme }) => theme.colors.White};
      align-self: center;
      padding: 0px 5px 5px 5px;
    }
  }
`;
