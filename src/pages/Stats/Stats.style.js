import styled from "styled-components";
import Pokeball from "../../assets/icons/Pokeball.svg";

export const PageContainer = styled.div`
  @media (max-width: 900px) {
    background-color: ${({ theme }) => theme.colors.Grass};
  }
  .headerContainer {
    @media (max-width: 900px) {
      display: none;
      background-color: ${({ theme }) => theme.colors.Grass};
    }
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.Grass};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PokeFoto = styled.div`
  background-image: url(${Pokeball});
  background-size: 80%;
  background-position: left center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.Grass};
  width: 33%;
  height: 90vh;
  padding: 17px 27px;
  position: relative;
  @media (max-width: 900px) {
    position: relative;
    width: 100vw;
    height: 35vh;
    background-size: 50%;
    background-position: 45vw center;
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
    width: 90%;
    position: absolute;
    left: 30%;
    @media (max-width: 900px) {
      left: 25vw;
      top: 5vh;
      width: 40vw;
    }
  }
`;

export const PokeStatsList = styled.div`
  width: 33vw;
  height: 100vh;
  padding: 17px 27px 27px 27px;
  height: 90vh;

  @media (max-width: 900px) {
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
  }

div{
  display: flex;
  background-color: transparent;

  img{
    background-color: transparent;

  }
  h2{
    font-size: 24px;
    margin: 0px 25px 0px 11px;
    color: ${({ theme }) => theme.colors.Grass};
    font-weight: 700;
    background-color: transparent;
    @media (max-width: 900px) {
    color: ${({ theme }) => theme.colors.White};
  }
  }
}
 
  h3 {
    color: ${({ theme }) => theme.colors.Grass};
    font-weight: 700;
    background-color: transparent;
    font-size: 12px;
    @media (max-width: 900px) {
      color: ${({ theme }) => theme.colors.White};
  }
  }
`;

export const PokeType = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 26px;
  p {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Grass};
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
      max-width: 10vw;
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
  color: ${({ theme }) => theme.colors.Grass};
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
      color: ${({ theme }) => theme.colors.Grass};
      font-weight: 600;
      font-size: 14px;
    }
  }

  .line {
    border: 1px solid ${({ theme }) => theme.colors.LightGray};
  }
  .numbers {
    p {
      font-weight: normal;
      font-size: 14px;
    }
  }
`;

export const Filler = styled.div`
  width: 20vw;
  @media (max-width: 900px) {
    display: none;
  }
`;
