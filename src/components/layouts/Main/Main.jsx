import me from './../../../assets/images/me.jpg';

export const Main = () => {
  return (

    <main className='mt-32 '> 
        <section className="flex items-center justify-center ">
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-purple-100  rounded-xl shadow-lg">
            
            {/* Texto */}
            <div className='flex flex-col items-center text-center p-20'>
              <h1 className="text-4xl font-bold text-gray-900">Soy Nathaly</h1>
              
              <p className="text text-justify text-gray-700 mt-40 w-80">
              Soy una desarrolladora junior con conocimientos básicos en programación y desarrollo de software. Estoy en constante aprendizaje y me apasiona mejorar mis habilidades para crear soluciones eficientes y funcionales. Me gusta trabajar en equipo y enfrentar nuevos desafíos para seguir creciendo profesionalmente.
              </p>
              
            </div>

            {/* Imagen */}
            <div>
              <img 
                src={me} 
                alt="Nathaly" 
                className="rounded-xl object-cover w-full"
              />
            </div>

            

          </div>
        </section>
        <section>
            <div>
              <h1 className='flex justify-center '>Habilidades tecnicas</h1>
            </div>
        </section>
    </main>
  );
};
