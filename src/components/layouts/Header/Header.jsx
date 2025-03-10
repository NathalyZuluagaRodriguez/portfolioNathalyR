import { ItemNavbar } from "../../UI/ItemNavbar/ItemNavbar";


export const Header = () => {
  return (
    <header className=" flex justify-around  bg-gradient-to-r from-purple-600 to-indigo-600  shadow-lg fixed top-0 left-0 w-full z-50 py-10 px-12 min-h-[60px] ">
      <div className="container mx-auto flex justify-between items-center list-none">
        <h1 className="text-4xl font-bold text-white tracking-wide">Nathaly</h1>

        <nav className="hidden md:flex gap-x-8 text-lg font-semibold">
        <ItemNavbar
            contents="Home"
            route="/Home"
            styles=" text-white hover:text-yellow-300 transition duration-300"
          />
          <ItemNavbar
            contents="About Me"
            route="/About"
            styles="text-white hover:text-yellow-300 transition duration-300"
          />
          <ItemNavbar
            contents="Blog"
            styles="text-white hover:text-yellow-300 transition duration-300"
          />
          
        </nav>
      </div>
    </header>
  );
};
