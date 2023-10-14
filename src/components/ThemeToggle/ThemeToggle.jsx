import { useTheme } from "../../context/ThemeContext";
import "./ThemeToggle.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ThemeToggle = ({}) => {
  //LOGICA
  const { toggleTheme, themeToggle } = useTheme();

  const textState = themeToggle ? "Dark" : "Light";

  return (
    <div className="theme_toggle">
      {themeToggle ? (
        <MdLightMode onClick={toggleTheme} />
      ) : (
        <MdDarkMode onClick={toggleTheme} />
      )}
      <span>{textState}</span>
    </div>
  );
};
