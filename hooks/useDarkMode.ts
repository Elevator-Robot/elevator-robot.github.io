import { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPreferences = window.localStorage.getItem("theme");
    if (typeof storedPreferences === "string") {
      return storedPreferences;
    }
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      return "dark";
    }
  }
  return "light";
};

export const useDarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
