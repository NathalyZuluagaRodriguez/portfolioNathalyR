import React from 'react';
import { Header } from '../../layouts/Header/Header';
import { ServicesGrid } from '../../Services/ServicesGrid';
import { Footer } from '../../layouts/Footer/Footer';
import { BoxSimple } from '../BoxSimple/BoxSimple';

export const Skills = () => {
  return (
  
    <>
    <Header />
    <h1 className='flex justify-center text-4xl font-bold text-gray-800 mt-6 mb-*84 underline decoration-purple-500'>Habilidades Tecnicas</h1>
    <br />
      <ServicesGrid />
      <br />
      <Footer />
    </>
  );
};

