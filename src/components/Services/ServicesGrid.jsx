import React from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const services = [
  { icon: FaCss3Alt, title: "CSS", description: "Diseño interfaces atractivas y responsivas con CSS, aplicando estilos personalizados para mejorar la experiencia del usuario." },
  { icon: FaHtml5, title: "HTML", description: "Estructuro el contenido de las páginas web utilizando HTML semántico para mejorar la accesibilidad" },
  { icon: FaJava, title: "Java", description: "Desarrollo aplicaciones backend y lógica de negocio con Java, aprovechando su robustez y versatilidad." },
  { icon: FaReact, title: "React", description: " Desarrollo interfaces interactivas y dinámicas con React, aprovechando su capacidad de crear componentes reutilizables y manejar el estado de manera eficiente." },
  { icon: IoLogoJavascript, title: "JavaScript", description: "Añado interactividad y funcionalidad a las aplicaciones web, utilizando JavaScript para manipular el DOM y gestionar eventos." },
  { icon: RiTailwindCssFill, title: "Tailwind CSS", description: "Utilizo Tailwind CSS para agilizar el desarrollo de estilos, creando diseños modernos y consistentes con clases utilitarias." }
];

export const ServicesGrid = () => {
  return (
    <section className="flex justify-center py-12 px-6 ">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg rounded-xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-xl hover:bg-white"
          >
            <service.icon className="text-6xl text-purple-700" />
            <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            <p className="text-base text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
