import React from "react";
import { FeatureCard } from "./FeatureCard";
import { FaUserShield } from "react-icons/fa";
import { BsClipboardCheckFill, BsFillPersonCheckFill } from "react-icons/bs";
import { FaPersonBurst } from "react-icons/fa6";

export const FeatureSection = () => {
  return (
    <>
      <br />
      <section className="flex justify-center mt-[<40>]  py-16">
        
        <div className="max-w-7xl  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
          <FeatureCard
            icon={BsClipboardCheckFill}
            title="Comunicación efectiva"
            description="Expreso ideas de manera clara y comprensible, facilitando la colaboración en proyectos. Escucho activamente y adapto mi comunicación según el contexto."
          />

          <FeatureCard
            icon={FaPersonBurst}
            title="Trabajo en Equipo"
            description="Disfruto colaborar con otros profesionales, aportando mis conocimientos y aprendiendo de los demás. Me adapto a diferentes metodologías de trabajo."
          />

          <FeatureCard
            icon={BsFillPersonCheckFill}
            title="Liderazgo"
            description="Me involucro activamente en la toma de decisiones y en la organización del equipo, fomentando un ambiente de trabajo motivador y productivo."
          />

          <FeatureCard
            icon={FaUserShield}
            title="Honestidad"
            description="Me comprometo a cumplir con mis responsabilidades y a ser sincera sobre mis capacidades, tiempos y desafíos en cada proyecto."
          />
        </div>
      </section>
    </>
  );
};
