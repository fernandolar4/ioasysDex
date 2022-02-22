import * as S from "./Home.style";

import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Search from "../../components/Search";
import FavoriteButton from "../../components/FavoriteButton";
import PokeCard from "../../components/PokeCard";
import getAllPokemons from "../../services/getAllPokemons";

const Home = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    const handleGetAllPokemons = async () => {
      const allPokemons = await getAllPokemons();
      setPokemons(allPokemons);
    };
    handleGetAllPokemons();
  }, []);
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
