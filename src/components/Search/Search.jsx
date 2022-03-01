import { useState } from "react";
import axios from "axios";

import * as S from "./Search.style";
import Lupa from "../../assets/icons/magnifier.svg";

const Search = () => {
  const [inputPokemon, setInputPokemon] = useState("");

  async function handleBuscaPkm() {
    const data = await axios({
      url: `https://pokeapi.co/api/v2/pokemon/${inputPokemon}`,
    });
    console.log(data);
  }

  return (
    <S.Formulario
      onSubmit={(event) => {
        event.preventDefault();
        handleBuscaPkm(inputPokemon);
      }}
    >
      <input
        type="text"
        id="search"
        placeholder="Buscar pokemon"
        className={"textarea"}
        value={inputPokemon}
        onChange={(event) => {
          setInputPokemon(event.target.value);
          console.log(inputPokemon);
        }}
      />
      <label htmlFor="search">Buscar</label>
      <input type="image" src={Lupa} alt="Lupa" className={"lupa"}></input>
    </S.Formulario>
  );
};

export default Search;
