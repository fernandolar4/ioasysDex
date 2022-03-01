import { useState } from "react";

import * as S from "./Search.style";
import Lupa from "../../assets/icons/magnifier.svg";

const Search = () => {

  return (
    <S.Formulario>
      <input
        type="text"
        id="search"
        placeholder="Buscar pokemon"
        className={"textarea"}
      />
      <label htmlFor="search">Buscar</label>
      <input type="image" src={Lupa} alt="Lupa" className={"lupa"}></input>
    </S.Formulario>
  );
};

export default Search;
