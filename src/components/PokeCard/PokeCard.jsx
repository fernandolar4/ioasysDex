import * as S from "./PokeCard.style";

import pokemons from "../../mocks/pokemon.json";

const PokeCard = () => {
  return (
    <S.CardContainer>
      {pokemons.map((poke) => (
        <S.Card id={poke.id} color={poke.type}>
          <p>#{poke.id}</p>
          <img src={poke.image} alt={poke.description} />
          <div>
            <p>{poke.name}</p>
          </div>
        </S.Card>
      ))}
    </S.CardContainer>
  );
};

export default PokeCard;
