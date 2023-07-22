import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, ThemeContextType } from "../../contexts/ThemeContext";
import { useContext } from "react";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div id="header">
      <h1>Retro Board</h1>
      <button className="theme-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faMoon} className="theme-icon" />
      </button>
    </div>
  );
};

export default Header;
