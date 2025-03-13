import me from './../../../assets/images/me.jpg';
import { FeatureSection } from '../../Features/FeatureSection';

export const Main = () => {
  return (
    <main className="flex flex-col min-h-screen mt-16 px-4 sm:px-6">
      {/* Contenedor principal */}
      <section className="flex justify-center m-20">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 rounded-xl shadow-2xl p-6 sm:p-12 transition-all duration-300 mx-auto">
          
          {/* Texto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left h-full px-6 sm:px-8 md:px-12 py-6 sm:py-10 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
              ¡Hola! Soy <span className="text-purple-700">Nathaly</span>
            </h1>

            <p className="text-gray-800 text-lg sm:text-xl max-w-md leading-relaxed">
              Soy una <strong>desarrolladora junior</strong> apasionada por la tecnología y el desarrollo de software. 
              Siempre estoy en constante aprendizaje, mejorando mis habilidades para crear soluciones eficientes y funcionales. 
              Me encanta trabajar en equipo y enfrentar nuevos desafíos para seguir creciendo profesionalmente. 
            </p>
          </div>


          {/* Imagen */}
          <div className="flex justify-center">
            <img 
              src={me} 
              alt="Nathaly" 
              className="rounded-xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      <div className='h-30'>

      </div>
      {/* Sección de habilidades */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-8  ">
          Habilidades Sociales
        </h2>
      
      <FeatureSection />
      <br />
    </main>
  );
};
