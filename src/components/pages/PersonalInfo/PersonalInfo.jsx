import React from 'react'
import { Header } from '../../layouts/Header/Header'
import { Footer } from '../../layouts/Footer/Footer'
import { BoxSimple } from '../BoxSimple/BoxSimple'

export const PersonalInfo = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
     <Header />
            <h1 className='flex justify-center text-4xl font-bold text-gray-800 mt-6 mb-*84 underline decoration-purple-500'>
                Informacion personal</h1>
                <br />
            <div className='flex flex-col items-center  min-h-30'>
                        <BoxSimple
                      title="Nivel de ingles"
                      features={[
                        { icon: "✍️", text: "Nivel B1 (Intermedio" },
                        { icon: "", text: "Tengo un nivel intermedio lo que me permite leer documentación, escribir y comunicarme en situaciones laborales básicas. Sigo mejorando mis habilidades. " },
                      ]}
                    />
                    
             </div>     
             <br />
             <div className='flex flex-col items-center  '>
                        <BoxSimple
                       title="Estudios"
                       features={[
                         { icon: "✍️", text: "Nivel B1 (Intermedio" },
                         { icon: "🎓", text: "Graduada de la Institucion Educativa Ciudadela del Sur (2023)" },
                         { icon: "💻", text: "Titulo de Tecnico en Programación de Software – SENA (2023)" },
                         { icon: "💻", text: "Curso de Programacion Basica Platzi - (2024)" },
                         { icon: "💻", text: "Curso de Python Essentials 1-  Cisco (2024)" },
                         { icon: "💻", text: "Tecnólogo en Análisis y Desarrollo de Software –- SENA (Actualidad)" },
 
                      ]}
                    />
                    
             </div>
        </div>
    <Footer />
    </>
   
  )
}
