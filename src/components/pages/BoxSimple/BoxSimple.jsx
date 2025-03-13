import React from "react";

export const BoxSimple = ({ title, features }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl mx-auto border border-gray-300">

      <h1 className="text-2xl font-bold text-purple-700 mb-4">
        {title}
      </h1>
      {features.map((feature, index) => (
        <p key={index} className="flex items-center text-gray-700 mb-2">
          {feature.icon} <span className="ml-2">{feature.text}</span>
        </p>
      ))}
    </div>
  );
};
