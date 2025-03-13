import React from 'react';
import { Header } from '../../layouts/Header/Header';
import { ServicesGrid } from '../../Services/ServicesGrid';
import { Footer } from '../../layouts/Footer/Footer';
import { BoxSimple } from '../BoxSimple/BoxSimple';

export const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
      <Header />

      <div className="flex flex-col items-center min-h-30 p-6 sm:p-10 md:p-14 lg:p-20 xl:p-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center sm:text-left mt-6 mb-4 underline decoration-purple-500">
          Habilidades Sociales
        </h1>

        <BoxSimple
          title="Habilidades Técnicas"
          features={[
            { icon: "🔄️", text: "Control de Versiones: Git, GitHub." },
            { icon: "✔️", text: "Educación y Liderazgo: Lógica de programación, preparación y conducción de conferencias." },
            { icon: "💻", text: "Desarrollo Web: Aplicaciones del lado del cliente." },
          ]}
          className="w-full max-w-4xl p-6 sm:p-10 md:p-16 lg:p-20"
        />
      </div>

      <ServicesGrid />
      <br />
      <Footer />
    </div>
  );
};

