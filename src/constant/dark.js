import { useEffect, useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(localStorage.theme);
  const [dark, setDark] = useState(false);
  const colorTheme = darkMode === "dark" ? "light" : "dark";

  useEffect(() => {
    const html = window.document.documentElement;

    html.classList.remove(colorTheme);
    html.classList.add(darkMode);
    localStorage.setItem("dark", darkMode);

    html.classList.contains("dark") ? setDark(true) : setDark(false);
  }, [colorTheme, darkMode, dark]);

  return [colorTheme, setDarkMode, dark];
};

export default DarkMode;
