import styled from "styled-components";
import Pokeball from "../../assets/icons/Pokeball.svg";

export const PageContainer = styled.div`
  .headerContainer {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 95vh;
  @media (max-width: 900px) {
    height: 100%;
    background-color: ${(props) =>
      ({ theme }) =>
        theme.colors[props.typeColor]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PokeFoto = styled.div`
  background-image: url(${Pokeball});
  background-size: 90%;
  background-position: left center;
  background-repeat: no-repeat;
  background-color: ${(props) =>
    ({ theme }) =>
      theme.colors[props.typeColor]};
  width: 33%;
  height: 100%;
  padding: 17px 27px;
  position: relative;

  @media (max-width: 900px) {
    position: relative;
    width: 100vw;
    height: 35vh;
    background-size: 50%;
    background-position: 45vw center;
    display: inline-block;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.colors.White};
    @media (max-width: 900px) {
      display: none;
    }
  }
  span,
  a,
  img {
    color: ${({ theme }) => theme.colors.White};
    background: transparent;
    font-weight: 700px;
    font-size: 16px;
  }

  .pokefoto {
    margin-top: 33px;
    max-width: 90%;

    position: absolute;
    left: 30%;

    @media (max-width: 900px) {
      max-width: 40vh;
      max-height: 35vh;

      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      text-align: center;
      z-index: 1;

      top: 5vh;
    }
  }
`;

export const PokeStatsList = styled.div`
  width: 33vw;
  height: 100vh;
  padding: 10px 27px 27px 27px;
  height: 100%;

  @media (max-width: 900px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 95vw;
    border-radius: 15px;
  }
`;

export const PokeName = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    position: absolute;
    background-color: transparent;
    top: 20px;
    color: ${({ theme }) => theme.colors.White};

    width: 85vw;
    justify-content: space-between;
  }

div{
  display: flex;
  background-color: transparent;

  }
  button{
    background: transparent;
  }
  img{
    background-color: transparent;

  }
  h2{
    font-size: 24px;
    margin: 0px 25px 0px 11px;
    color: ${(props) =>
      ({ theme }) =>
        theme.colors[props.typeColor]};
    font-weight: 700;
    background-color: transparent;
    @media (max-width: 900px) {
    color: ${({ theme }) => theme.colors.White};
  }
  }
}
 
  h3 {
    color: ${(props) =>
      ({ theme }) =>
        theme.colors[props.typeColor]};
    font-weight: 700;
    background-color: transparent;
    font-size: 12px;
    @media (max-width: 900px) {
      color: ${({ theme }) => theme.colors.White};
  }
  }
`;
export const PokeTypeContainer = styled.div`
  display: flex;
`;

export const PokeType = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 26px;

  p {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.White};
    background-color: ${(props) =>
      ({ theme }) =>
        theme.colors[props.typeColor]};
    border-radius: 20px;
    font-weight: 700;
    padding: 2px 8px 2px 8px;
  }
`;

export const PokeFitness = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40vw;

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.Text};
      overflow-wrap: break-word;
      max-width: 15vw;
      @media (max-width: 900px) {
        max-width: 40vw;
        font-size: 14px;
      }
    }
    img {
      fill: ${({ theme }) => theme.colors.DarkGray};
      height: 16px;
      margin-right: 8px;
    }
    h4 {
      font-size: 12px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.MediumGray};
    }
  }
`;

export const PokeText = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.Text};
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
`;

export const PokeTableName = styled.p`
  margin-top: 30px;
  color: ${(props) =>
    ({ theme }) =>
      theme.colors[props.typeColor]};
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
`;

export const PokeTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .stats {
    p {
      color: ${(props) =>
        ({ theme }) =>
          theme.colors[props.typeColor]};
      font-weight: 600;
      font-size: 14px;
    }
  }

  .line {
    margin-left: 14px;
    border: 1px solid ${({ theme }) => theme.colors.LightGray};
    opacity: 0.5;
  }
  .numbers {
    p {
      margin-left: 14px;
      font-weight: normal;
      font-size: 14px;
    }
  }
  .graph {
    margin-top: 7px;
    margin-left: 14px;
    .border {
      background-color: ${(props) =>
        ({ theme }) =>
          theme.colors[props.typeColor]};
      opacity: 0.65;
      width: 300px;
      height: 6px;
      margin-bottom: 15px;
      @media (max-width: 900px) {
        width: 100px;
      }
      .percentage {
        mix-blend-mode: multiply;
        background-color: ${(props) =>
          ({ theme }) =>
            theme.colors[props.typeColor]};
        height: 6px;
      }
    }
  }
`;

export const Filler = styled.div`
  width: 20vw;
  @media (max-width: 900px) {
    display: none;
  }
`;
