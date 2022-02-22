import * as S from "./Header.style";
import Logo from "../../assets/icons/ioasys.svg";
import React, { useContext } from "react";

import { ThemeContext } from "styled-components";
import { TemaContext } from "../../TemaContext";
import Switch from "react-switch";

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
          checked={title === "lightTheme"}
          checkedIcon={false}
          uncheckedIcon={false}
          width={40}
          height={27}
          handleDiameter={20}
          offColor={"#212121"}
          onColor={"#F7F7F7"}
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
