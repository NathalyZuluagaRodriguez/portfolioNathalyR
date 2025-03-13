import React from 'react';
import { Header } from '../../layouts/Header/Header';
import { ServicesGrid } from '../../Services/ServicesGrid';
import { Footer } from '../../layouts/Footer/Footer';
import { BoxSimple } from '../BoxSimple/BoxSimple';

export const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow">
        
        <h1 className='flex justify-center text-4xl font-bold text-gray-800 mt-6 mb-4 underline decoration-purple-500'>Habilidades Tecnicas</h1>
        <br />
        <div className='flex justify-center w-220 '>
            <BoxSimple
          title="Habilidades Técnicas"
          features={[
            { icon: "🔄️", text: "Control de Versiones: Git, GitHub." },
            { icon: "✔️", text: "Educación y Liderazgo: Lógica de programación, preparación y conducción de conferencias." },
            { icon: "💻", text: "Desarrollo Web: Aplicaciones del lado del cliente." },
          ]}
        />
        
      </div>
      <br />
        <ServicesGrid />
      </div>
      <br />
      <Footer />
    </div>
  );
};
