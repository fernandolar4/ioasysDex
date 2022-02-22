import * as S from "./Stats.style";

import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import BackButton from "../../components/BackButton";

import EmptyHearth from "../../assets/icons/EmptyHeart.svg";
import FullHearth from "../../assets/icons/FullHeart.svg";

import Weight from "../../assets/icons/weight.svg";
import Height from "../../assets/icons/height.svg";

import pokemons from "../../mocks/pokemon.json";

const Stats = () => {
  const location = useLocation();
  const pokemon = location.state;
  console.log("aksdkpoa", location);
  return (
    <>
      <Header />
      <S.Body>
        <S.PokeFoto>
          <div>
            <span></span>
            <BackButton />
            <span>ABOUT</span>
          </div>
          <img
            className="pokefoto"
            src={pokemons[0].image}
            alt={pokemons[0].name}
          />
        </S.PokeFoto>
        <S.PokeStatsList>
          <S.PokeName>
            <img src={EmptyHearth} alt="Favoritar" />
            <h2>{pokemons[0].name}</h2>
            <h3>#{pokemons[0].id}</h3>
          </S.PokeName>
          <S.PokeType>
            {pokemons[0].types.map((type) => (
              <p>{type}</p>
            ))}
          </S.PokeType>
          <S.PokeFitness>
            <div>
              <p>
                <img src={Weight} alt="Peso"></img>
                6,9 kg
              </p>
              <h4>Weight</h4>
            </div>
            <div>
              <p>
                <img src={Height} alt="Altura"></img>
                0,7 m
              </p>
              <h4>Height</h4>
            </div>
            <div>
              <p>Chlorophyll / Overgrow</p>
              <h4>Ability</h4>
            </div>
          </S.PokeFitness>
          <S.PokeText>
            <p>{pokemons[0].description}</p>
          </S.PokeText>
          <S.PokeTableName>Base Stats</S.PokeTableName>
          <S.PokeTable>
            <div className="stats">
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className="line"></div>
            <div className="numbers">
              <p>{pokemons[0].stats[5].value}</p>
              <p>{pokemons[0].stats[4].value}</p>
              <p>{pokemons[0].stats[3].value}</p>
              <p>{pokemons[0].stats[2].value}</p>
              <p>{pokemons[0].stats[1].value}</p>
              <p>{pokemons[0].stats[0].value}</p>
            </div>
            <div className="graph"></div>
          </S.PokeTable>
        </S.PokeStatsList>
        <S.Filler />
      </S.Body>
    </>
  );
};

export default Stats;
