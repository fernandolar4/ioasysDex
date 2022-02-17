import * as S from "./Favorites.style";

import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import BackButton from "../../components/BackButton";

const Favorites = () => {
  return (
    <>
      <Header />
      <S.Linha />
      <S.Links>
        <BackButton />
        <FavoriteButton />
        <span></span>
      </S.Links>
    </>
  );
};
export default Favorites;
