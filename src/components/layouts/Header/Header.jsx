import { useState } from "react";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="  flex justify-around  bg-gradient-to-r from-purple-600 to-indigo-600  shadow-lg fixed top-0 left-0 w-full z-50 py-10 px-12 min-h-[60px]">
      <div className="container mx-auto flex justify-between items-center list-none">
        <h1 className="text-4xl font-bold text-white tracking-wide">Mi Portafolio</h1>

        <nav className="hidden md:flex gap-x-8 text-lg font-semibold">
        <ItemNavbar
            contents="Home"
            route="/Home"
            styles=" text-white hover:text-yellow-300 transition duration-300"
          />
          <ItemNavbar
            contents="Skills"
            route="/Skills"
            styles="text-white hover:text-yellow-300 transition duration-300"
          />
          <ItemNavbar
            contents="About Me"
            route="/PersonalInfo"
            styles="text-white hover:text-yellow-300 transition duration-300"
          />
          
        </nav>
      </div>

      {/* Navbar móvil (desplegable) */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-purple-700 shadow-lg flex flex-col items-center py-4 gap-4">
          <ItemNavbar
            contents="Home"
            route="/Home"
            styles="text-white hover:text-yellow-300 transition duration-300"
          />
          <ItemNavbar
            contents="Skills"
            route="/Skills"
            styles="text-white hover:text-yellow-300 transition duration-300"
          />
          
        </nav>
      )}
    </header>
  );
};
