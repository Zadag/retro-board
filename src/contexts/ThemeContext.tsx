import { useState, createContext, Dispatch, SetStateAction } from "react";

type ThemePropType = "light" | "dark";
export type ThemeContextType = {
  theme: ThemePropType;
  toggleTheme: () => void; //Dispatch<SetStateAction<ThemePropType>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemePropType>("dark");

  const toggleTheme = () => {
    console.log(theme);
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
