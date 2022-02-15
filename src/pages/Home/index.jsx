import * as S from "./Home.style";

import Header from "../../components/Header";
import Search from "../../components/Search";
import FavoriteButton from "../../components/FavoriteButton";
const Home = () => {
  return (
    <>
      <Header />
      <S.Box>
        <Search />
        <FavoriteButton />
      </S.Box>
    </>
  );
};

export default Home;
