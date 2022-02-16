import Lupa from "../../assets/icons/magnifier.svg";
import * as S from "./Search.style";

const Search = () => (
  
    <S.Formulario>
      <input type="text" id="search" placeholder="Buscar pokemon"></input>
      <label htmlFor="search">Buscar</label>
      <input type="image" src={Lupa} alt="Lupa"></input>
    </S.Formulario>
  
);

export default Search;
