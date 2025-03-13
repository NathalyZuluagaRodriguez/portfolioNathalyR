import me from './../../../assets/images/me.jpg';
import { FeatureSection } from '../../Features/FeatureSection';

export const Main = () => {
  return (
    <main className="mt-16 px-4">
      {/* Sección de presentación */}
      <section className="flex items-center justify-center">
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 rounded-xl shadow-2xl p-8 sm:p-14 transition-all duration-300">
          
          {/* Texto */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left h-full">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              ¡Hola! Soy <span className="text-purple-700">Nathaly</span>
            </h1>

            <p className="text-gray-800 text-lg sm:text-xl mt-6 sm:mt-8 w-full max-w-md leading-relaxed">
              Soy una <strong>desarrolladora junior</strong> apasionada por la tecnología y el desarrollo de software. Siempre estoy en constante aprendizaje, mejorando mis habilidades para crear soluciones eficientes y funcionales. 
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

      {/* Separación entre secciones */}
      <div className="mt-20"></div>

      {/* Sección de habilidades técnicas */}
      <h1 className="flex justify-center text-4xl font-extrabold text-gray-800 mt-6 mb-4 underline decoration-purple-500">
        Habilidades Sociales
      </h1>
      <br />
      <FeatureSection />
    </main>
  );
};
