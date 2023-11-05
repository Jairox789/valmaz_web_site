import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeToggle = ({}) => {
  //LOGICA
  const { toggleTheme, themeToggle } = useTheme();

  const textState = themeToggle == "light" ? "Dark" : "Light";

  return (
    <div className="theme_toggle" onClick={toggleTheme}>
      {themeToggle ? <MdLightMode /> : <MdDarkMode />}
      <span>{textState}</span>
    </div>
  );
};
