import { useState } from "react";
import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full h-15 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg py-4 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8 list-none">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Mi Portafolio</h1>

          {/* Botón del menú en pantallas pequeñas (480px o menos) */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Menú Desktop */}
          <nav className="hidden md:flex gap-x-8 text-lg font-semibold">
            <ItemNavbar contents="Home" route="/" styles="text-white hover:text-yellow-300 transition duration-300" />
            <ItemNavbar contents="Skills" route="/Skills" styles="text-white hover:text-yellow-300 transition duration-300" />
            <ItemNavbar contents="About Me" route="/PersonalInfo" styles="text-white hover:text-yellow-300 transition duration-300" />
          </nav>
        </div>

        {/* MENÚ HAMBURGUESA (Se muestra en pantallas ≤ 480px) */}
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-purple-700 shadow-lg flex flex-col items-center py-4 gap-4 list-none">
            <ItemNavbar contents="Home" route="/" styles="text-white hover:text-yellow-300 transition duration-300" />
            <ItemNavbar contents="Skills" route="/Skills" styles="text-white hover:text-yellow-300 transition duration-300" />
            <ItemNavbar contents="About Me" route="/PersonalInfo" styles="text-white hover:text-yellow-300 transition duration-300" />
          </nav>
        )}
      </header>

      {/* Para que el contenido no quede tapado */}
      <div className="pt-20"></div>
    </>
  );
};
