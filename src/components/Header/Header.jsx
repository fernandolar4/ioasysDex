import * as S from "./Header.style";
import Logo from "../../assets/icons/ioasys.svg";
import RedBall from "../../assets/icons/RedBall.svg";
import GreyBall from "../../assets/icons/GreyBall.svg";
import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    // localStorage.setItem("theme", theme);
  };
  return (
    <>
      <S.ColorContainer />
      <S.Title>
        <div>
          <img src={Logo} alt="ioasys" />
          <h1>ioasys pokédex</h1>
        </div>
        <button type="switch" onClick={toggleTheme}>
          {isDarkTheme ? (
            <img src={GreyBall} alt="Mudar Tema" />
          ) : (
            <img src={RedBall} alt="Mudar Tema" />
          )}
        </button>
      </S.Title>
    </>
  );
};

export default Header;
