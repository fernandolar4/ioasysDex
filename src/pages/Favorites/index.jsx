import * as S from "./Favorites.style";

import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import BackButton from "../../components/BackButton";
import PokeCard from "../../components/PokeCard";

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
      {/* <span>
        1 - SALVAR OS POKEMONS FAVORITOS NO LOCAL STATE 2 - RENDERIZAR ELES
        NESSA TELA 3 - LIMITAR O LOCAL STATE À 12 POKEMONS FAV 4 - RENDEZERIZAR
        OS BLOCOS CINZAS QUANDO NÃO HOUVER X POKEMONS FAV
      </span> */}
      <div className="mobileOnlyButton">
        <BackButton />
      </div>
    </S.PageContainer>
  );
};
export default Favorites;
