import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import BackButton from "../../components/BackButton";

import * as S from "./Stats.style";
import EmptyHearth from "../../assets/icons/EmptyHeart.svg";
import FullHearth from "../../assets/icons/FullHeart.svg";
import Weight from "../../assets/icons/weight.svg";
import Height from "../../assets/icons/height.svg";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatNumber = (number) => {
  return ("00" + number).slice(-3);
};

const formatValues = (number) => {
  return number / 10;
};

const statsPercentage = (number) => {
  return (number / 255) * 100 + "%";
};

const Stats = () => {
  const location = useLocation();
  const pokemon = location.state;

  return (
    <S.PageContainer>
      <Header typeColor={capitalizeFirstLetter(pokemon.types[0].type.name)} />
      <S.Body typeColor={capitalizeFirstLetter(pokemon.types[0].type.name)}>
        <S.PokeFoto
          typeColor={capitalizeFirstLetter(pokemon.types[0].type.name)}
        >
          <div>
            <span></span>
            <BackButton />
            <span>ABOUT</span>
          </div>
          <img
            className="pokefoto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </S.PokeFoto>
        <S.PokeStatsList>
          <S.PokeName
            typeColor={capitalizeFirstLetter(pokemon.types[0].type.name)}
          >
            <div>
              {/* MELHORAR A LOGICA DO BOTAO: CHECAR SE JÁ ESTA FAVORITADO, STATE? IF?; CASO NAO MANTER O SETITEM CASO JA ESTEJA MUDAR PARA removeItem()
            COM ISSO ALTERAR TAMBEM O DISPLAY DO BOTAO */}
              <button
                onClick={() =>
                  localStorage.setItem(`${pokemon.id}`, JSON.stringify(pokemon))
                }
              >
                <img src={EmptyHearth} alt="Favoritar" />
              </button>
              <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            </div>

            <h3>#{formatNumber(pokemon.id)}</h3>
          </S.PokeName>
          <S.PokeTypeContainer>
            {pokemon.types.map((tp) => (
              <S.PokeType
                key={tp.type.name}
                typeColor={capitalizeFirstLetter(tp.type.name)}
              >
                <p>{capitalizeFirstLetter(tp.type.name)}</p>
              </S.PokeType>
            ))}
          </S.PokeTypeContainer>
          <S.PokeFitness>
            <div>
              <p>
                <img src={Weight} alt="Peso"></img>
                {formatValues(pokemon.weight)} KG
              </p>
              <h4>Weight</h4>
            </div>
            <div>
              <p>
                <img src={Height} alt="Altura"></img>
                {formatValues(pokemon.height)} M
              </p>
              <h4>Height</h4>
            </div>
            <div>
              {pokemon.abilities.map((ab) => (
                <p key={ab.ability.name}>
                  {capitalizeFirstLetter(ab.ability.name)}
                </p>
              ))}

              <h4>Ability</h4>
            </div>
          </S.PokeFitness>
          <S.PokeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo
            felis, vulputate vitae sapien eu, feugiat ultrices nibh. Sed neque
            diam, mollis eu consequat eget, porta eget ante. Integer diam sem,
            volutpat varius consectetur vitae, congue a elit. Nullam mattis nibh
            quis quam aliquet pulvinar. Suspendisse potenti. Nam posuere auctor
            nunc vitae consectetur. Etiam in nibh et nisl accumsan rutrum. Cras
            venenatis eros metus, pellentesque congue lorem auctor sed.
          </S.PokeText>
          <S.PokeTableName
            typeColor={capitalizeFirstLetter(pokemon.types[0].type.name)}
          >
            Base Stats
          </S.PokeTableName>
          <S.PokeTable
            typeColor={capitalizeFirstLetter(pokemon.types[0].type.name)}
          >
            <div className="stats">
              <p>HP</p>
              <p>ATK</p>
              <p>DEF</p>
              <p>SATK</p>
              <p>SDEF</p>
              <p>SPD</p>
            </div>
            <div className="line"></div>
            <div className="numbers">
              <p>{pokemon.stats[0].base_stat}</p>
              <p>{pokemon.stats[1].base_stat}</p>
              <p>{pokemon.stats[2].base_stat}</p>
              <p>{pokemon.stats[3].base_stat}</p>
              <p>{pokemon.stats[4].base_stat}</p>
              <p>{pokemon.stats[5].base_stat}</p>
            </div>
            <div className="graph">
              <div className="border">
                <div
                  className="percentage"
                  style={{ width: statsPercentage(pokemon.stats[0].base_stat) }}
                ></div>
              </div>
              <div className="border">
                <div
                  className="percentage"
                  style={{ width: statsPercentage(pokemon.stats[1].base_stat) }}
                ></div>
              </div>
              <div className="border">
                <div
                  className="percentage"
                  style={{ width: statsPercentage(pokemon.stats[2].base_stat) }}
                ></div>
              </div>
              <div className="border">
                <div
                  className="percentage"
                  style={{ width: statsPercentage(pokemon.stats[3].base_stat) }}
                ></div>
              </div>
              <div className="border">
                <div
                  className="percentage"
                  style={{ width: statsPercentage(pokemon.stats[4].base_stat) }}
                ></div>
              </div>
              <div className="border">
                <div
                  className="percentage"
                  style={{ width: statsPercentage(pokemon.stats[5].base_stat) }}
                ></div>
              </div>
            </div>
          </S.PokeTable>
        </S.PokeStatsList>
        <S.Filler />
      </S.Body>
    </S.PageContainer>
  );
};

export default Stats;
