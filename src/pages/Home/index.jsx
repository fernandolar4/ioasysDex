import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import * as S from "./Home.style";
import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import PokeCard from "../../components/PokeCard";
import getAllPokemons from "../../services/getAllPokemons";
import Lupa from "../../assets/icons/magnifier.svg";
import X from "../../assets/icons/x.svg";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [scrollEnds, setScrollEnds] = useState(false);
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState("/pokemon");

  const [inputPokemon, setInputPokemon] = useState("");

  async function handleBuscaPkm() {
    const data = await axios({
      url: `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`,
    });
    setPokemons([data]);
  }

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setScrollEnds(true);
    } else {
      setScrollEnds(false);
    }
  };

  useEffect(() => {
    if (!scrollEnds && pokemons.length !== 0) {
      return;
    }
    const handleGetAllPokemons = async () => {
      const allPokemons = await getAllPokemons(nextPokemonsUrl);
      setPokemons([...pokemons, ...allPokemons.results]);
      setNextPokemonsUrl(allPokemons.next);
    };
    handleGetAllPokemons();
  }, [scrollEnds]);

  return (
    <S.HomeContainer>
      <Header />
      <S.Box>
        <S.Formulario
          onSubmit={(event) => {
            event.preventDefault();
            handleBuscaPkm(inputPokemon);
          }}
        >
          <input
            type="text"
            id="search"
            placeholder="Buscar pokemon"
            className={"textarea"}
            value={inputPokemon}
            onChange={(event) => {
              setInputPokemon(event.target.value);
              console.log(inputPokemon);
            }}
          />
          <label htmlFor="search">Buscar</label>
          {inputPokemon ? (
            <input
              to="/"
              type="image"
              src={X}
              alt="Lupa"
              className={"lupa"}
              onClick={(event) => {
                event.refresh();
              }}
            ></input>
          ) : (
            <input
              type="image"
              src={Lupa}
              alt="Lupa"
              className={"lupa"}
            ></input>
          )}
        </S.Formulario>
        <FavoriteButton className={"nameless"} />
      </S.Box>
      <PokeCard pokemons={pokemons} />
    </S.HomeContainer>
  );
};

export default Home;
