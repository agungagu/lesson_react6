import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { theme, togleTheme } = useTheme();
  return (
    <nav
      className={`w-full p-4 flex items-center justify-center gap-6 bg-orange-500 shadow-md`}
    >
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/user"}>User</NavLink>
      <NavLink to={"/coments"}>Coments</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>

      <button
        onClick={togleTheme}
        className="p-2 rounded-md shadow-md bg-black text-white"
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </nav>
  );
}
