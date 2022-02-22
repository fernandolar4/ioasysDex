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
    <>
      <Header />
      <S.Box>
        <Search />
        <FavoriteButton />
      </S.Box>
      <PokeCard pokemons={pokemons} />
    </>
  );
};

export default Home;
