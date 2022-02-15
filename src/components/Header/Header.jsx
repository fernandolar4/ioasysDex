import * as S from "./Header.style";
import Logo from "../../assets/icons/ioasys.svg";

const Header = () => (
  <>
    <S.Container />
    <S.Title>
      <div>
        <img src={Logo} alt="ioasys" />
        <h1>ioasys pokédex</h1>
      </div>

      <button type="switch">A</button>
    </S.Title>
  </>
);
export default Header;
