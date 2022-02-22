import * as S from "./PokeCard.style";
import { Link } from "react-router-dom";

const PokeCard = (props) => {
  const { pokemons } = props;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const formatNumber = (number) => {
    return ("00" + number).slice(-3);
  };

  return (
    <S.CardContainer>
      {pokemons.length > 0 &&
        pokemons.map((poke) => (
          <Link to="/status" style={{ textDecoration: "none" }}>
            <S.Card
              key={poke.data.id}
              type={capitalizeFirstLetter(poke.data.types[0].type.name)}
            >
              <p>#{formatNumber(poke.data.id)}</p>
              <img src={poke.data.sprites.front_default} alt={poke.data.name} />
              <div>
                <p>{capitalizeFirstLetter(poke.data.name)}</p>
              </div>
            </S.Card>
          </Link>
        ))}
    </S.CardContainer>
  );
};

export default PokeCard;
