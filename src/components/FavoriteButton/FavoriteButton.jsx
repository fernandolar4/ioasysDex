import * as S from "./FavoriteButton.style";
import FullHeart from "../../assets/icons/FullHeart.svg";
import { Link } from "react-router-dom";

const FavoriteButton = () => (
  <>
    <S.Div>
      <Link to="/favoritos">
        <img src={FullHeart} alt="Coração" />
        Meus favoritos
      </Link>
    </S.Div>
  </>
);

export default FavoriteButton;
