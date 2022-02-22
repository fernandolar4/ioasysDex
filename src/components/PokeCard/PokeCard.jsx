import * as S from "./PokeCard.style";

const PokeCard = (props) => {
  const { pokemons } = props;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <S.CardContainer>
      {pokemons.length > 0 &&
        pokemons.map((poke) => (
          <S.Card
            key={poke.data.id}
            type={capitalizeFirstLetter(poke.data.types[0].type.name)}
          >
            <p>#{poke.data.id}</p>
            <img src={poke.data.sprites.front_default} alt={poke.data.name} />
            <div>
              <p>{capitalizeFirstLetter(poke.data.name)}</p>
            </div>
          </S.Card>
        ))}
    </S.CardContainer>
  );
};

export default PokeCard;
