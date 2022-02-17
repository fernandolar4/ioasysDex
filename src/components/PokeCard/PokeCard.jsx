import * as S from "./PokeCard.style";

import pokemons from "../../mocks/pokemon.json";

const PokeCard = () => {
  return <>{pokemons.map((poke) => console.log(poke))}</>;
};

export default PokeCard;
