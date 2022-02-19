import styled from "styled-components";
import Pokeball from "../../assets/icons/Pokeball.svg";

export const Body = styled.body`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PokeFoto = styled.div`
  background-image: url(${Pokeball});
  background-position: left center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.Grass};
  width: 33%;
  height: 100%;
  padding: 17px 27px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    color: ${({ theme }) => theme.colors.White};
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
    width: 391px;
    position: relative;
    left: 130px;
  }
`;

export const PokeStatsList = styled.div`
  width: 33vw;

  height: 100vh;
  padding: 17px 27px 27px 27px;
`;

export const PokeName = styled.div`
  display: flex;
  align-items: center;

  h2,
  h3 {
    color: ${({ theme }) => theme.colors.Grass};
    font-weight: 700;
  }
  h2 {
    font-size: 24px;
    margin: 0px 25px 0px 11px;
  }
  h3 {
    font-size: 12px;
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
    p {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.Text};
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
`;
