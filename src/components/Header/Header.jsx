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
          checked={title === "theme"}
          checkedIcon={false}
          uncheckedIcon={false}
          width={40}
          height={27}
          handleDiameter={20}
          offColor={"transparent"}
          onColor={"transparent"}
          onHandleColor={"#EC0344"}
          offHandleColor={"#8D8B92"}
          borderRadius={40}
          className={"switch"}
        ></Switch>
      </S.Title>
    </>
  );
};

export default Header;
