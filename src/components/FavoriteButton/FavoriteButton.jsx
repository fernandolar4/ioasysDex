import * as S from "./FavoriteButton.style";
import FullHeart from "../../assets/icons/FullHeart.svg";
import { Link } from "react-router-dom";

const FavoriteButton = () => (
  <>
    <S.Div>
      <img src={FullHeart} alt="Coração" />

      <Link to="/favoritos">Meus favoritos</Link>
    </S.Div>
  </>
);

export default FavoriteButton;
