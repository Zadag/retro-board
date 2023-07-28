import Header from "./components/Header/Header";
import { ThemeContext, ThemeContextType } from "./contexts/ThemeContext";
import { useContext } from "react";
import Retroboard from "./components/Retroboard/Retroboard";

function App() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div
      id="app-wrapper"
      className={theme === "dark" ? "theme-dark" : "theme-light"}
    >
      <Header />
      <Retroboard />
    </div>
  );
}

export default App;
