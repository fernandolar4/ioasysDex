import styled from "styled-components";



export const CardContainer = styled.div`
  gap: 20px;
  display: grid;
  margin: 70px auto;
  margin-bottom: 30px;
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
  border: 1px solid
    ${(props) =>
      ({ theme }) =>
        theme.colors[props.type]};
  border-radius: 10px;

  p {
    font-size: 11px;
    align-self: right;
    color: ${(props) =>
      ({ theme }) =>
        theme.colors[props.type]};
    align-self: flex-end;
    margin: 7px 10px 0px 0px;
  }
  img {
    width: 95px;
  }
  div {
    width: 102%;
    height: 102%;

    background-color: ${(props) =>
      ({ theme }) =>
        theme.colors[props.type]};

    border-radius: 0px 0px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      background: transparent;
      text-align: center;
      align-self: center;
      padding: 0px 5px 5px 5px;
      font-size: 13px;
      color: ${({ theme }) => theme.colors.White};
    }
  }
`;
