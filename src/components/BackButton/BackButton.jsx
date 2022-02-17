import * as S from "./BackButton.style";

import BackArrow from "../../assets/icons/backarrow.svg";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <S.GoBack>
      <Link to="/">
        <img src={BackArrow} alt="Voltar" /> Voltar
      </Link>
    </S.GoBack>
  );
};

export default BackButton;
