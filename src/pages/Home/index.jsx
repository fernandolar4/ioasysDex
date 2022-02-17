import * as S from "./Home.style";

import Header from "../../components/Header";
import Search from "../../components/Search";
import FavoriteButton from "../../components/FavoriteButton";
import PokeCard from "../../components/PokeCard";

const Home = () => {
  return (
    <>
      <Header />
      <S.Box>
        <Search />
        <FavoriteButton />
      </S.Box>
      <PokeCard />
    </>
  );
};

export default Home;
