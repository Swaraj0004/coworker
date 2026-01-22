import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 1000,
        padding: "0.5rem 0.8rem",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
