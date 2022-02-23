import * as S from "./Favorites.style";

import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import BackButton from "../../components/BackButton";

const Favorites = () => {
  return (
    <S.PageContainer>
      <Header />
      <S.Linha />
      <S.Links>
        <BackButton />
        <FavoriteButton />
        <span></span>
      </S.Links>
      <div className="mobileOnlyButton">

      <BackButton />
      </div>
    </S.PageContainer>
  );
};
export default Favorites;
