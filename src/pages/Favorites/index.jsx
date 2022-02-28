import * as S from "./Favorites.style";
import * as S2 from "../../components/PokeCard/PokeCard.style";

import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import BackButton from "../../components/BackButton";

const Favorites = () => {
  const pokemons = [];
  const listaPlaceholders = [];

  // Eu sei que isso aqui não ta uma boa pratica mas ta funcionando por enquanto
  for (let i = 0; i < 898; i++) {
    if (localStorage.getItem(i) !== null) {
      pokemons.push(JSON.parse(localStorage.getItem(i)));
    }
  }
  const listaFavoritos = pokemons.slice(0, 12);

  for (let i = 0; i < 12 - listaFavoritos.length; i++) {
    listaPlaceholders.push("placeholder");
  }

  console.log("listaPlaceholders", listaPlaceholders.length);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const formatNumber = (number) => {
    return ("00" + number).slice(-3);
  };

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
        {listaFavoritos.map((pokemon) => (
          <S2.Card
            type={capitalizeFirstLetter(pokemon.types[0].type.name)}
            key={pokemon.id}
          >
            <p>#{formatNumber(pokemon.id)}</p>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div>
              <p>{capitalizeFirstLetter(pokemon.name)}</p>
            </div>
          </S2.Card>
        ))}
        {listaPlaceholders.map(() => (
          <S.Placeholder />
        ))}
      </S2.CardContainer>

      <div className="mobileOnlyButton">
        <BackButton />
      </div>
    </S.PageContainer>
  );
};
export default Favorites;
