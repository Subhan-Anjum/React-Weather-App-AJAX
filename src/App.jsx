import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <Navbar onToggleTheme = {toggleTheme} />
      <Weather />
    </>
  );
}

export default App;
