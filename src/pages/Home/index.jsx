import * as S from "./Home.style";

import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Search from "../../components/Search";
import FavoriteButton from "../../components/FavoriteButton";
import PokeCard from "../../components/PokeCard";
import getAllPokemons from "../../services/getAllPokemons";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [scrollEnds, setScrollEnds] = useState(false);
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState("/pokemon");

  const [pokemonBusca, setPokemonBusca] = useState("");

  function eventoBusca(e) {
    e.preventDefault();
    console.log("a");
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
        <Search onSubmit={() => eventoBusca()} />
        <FavoriteButton className={"nameless"} />
      </S.Box>
      <PokeCard pokemons={pokemons} />
    </S.HomeContainer>
  );
};

export default Home;
