import React from 'react';

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-6 sm:p-8 md:p-10 transition-transform hover:scale-105">
      <Icon className="text-purple-600 text-5xl mb-4" />
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 text-base sm:text-lg my-2">{description}</p>
    </div>
  );
};
