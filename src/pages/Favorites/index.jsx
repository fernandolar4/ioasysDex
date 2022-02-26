import * as S from "./Favorites.style";
import * as S2 from "../../components/PokeCard/PokeCard.style";

import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import BackButton from "../../components/BackButton";

const Favorites = () => {
  const pokemons = [];

  for (let i = 0; i < 2000; i++) {
    if (localStorage.getItem(i) !== null) {
      pokemons.push(JSON.parse(localStorage.getItem(i)));
    }
  }
  pokemons.length = 12;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const formatNumber = (number) => {
    return ("00" + number).slice(-3);
  };

  console.log("arr", pokemons);

  return (
    <S.PageContainer>
      <Header />
      <S.Linha />
      <S.Links>
        <BackButton />
        <FavoriteButton />
        <span></span>
      </S.Links>

      <S2.CardContainer>
        {pokemons.map((pokemon) => (
          <S2.Card type={capitalizeFirstLetter(pokemon.types[0].type.name)}>
            <p>#{formatNumber(pokemon.id)}</p>
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <div>
              <p>{capitalizeFirstLetter(pokemon.name)}</p>
            </div>
          </S2.Card>
        ))}
      </S2.CardContainer>

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
