import * as S from "./Header.style";
import Logo from "../../assets/icons/ioasys.svg";
import { ThemeContext } from "styled-components";
import React, { useContext } from "react";
import Switch from "react-switch";
import { TemaContext } from "../../TemaContext";

const Header = () => {
  const { title } = useContext(ThemeContext);
  const toggleTheme = useContext(TemaContext);
  return (
    <>
      <S.ColorContainer />
      <S.Title>
        <div>
          <img src={Logo} alt="ioasys" />
          <h1>ioasys pokédex</h1>
        </div>
        <Switch
          onChange={toggleTheme}
          checked={title === "darkTheme"}
          checkedIcon={false}
          uncheckedIcon={false}
          width={40}
          height={27}
          handleDiameter={20}
          offColor={"EC0344"}
          onColor={"EC0344"}
          onHandleColor={"666666"}
        ></Switch>
      </S.Title>
    </>
  );
};

export default Header;
