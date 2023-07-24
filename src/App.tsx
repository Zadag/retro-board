import "./App.css";
import Header from "./components/Header/Header";
import { ThemeContext, ThemeContextType } from "./contexts/ThemeContext";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div
      id="app-wrapper"
      className={theme === "dark" ? "theme-dark" : "theme-light"}
    >
      <Header />
    </div>
  );
}

export default App;
