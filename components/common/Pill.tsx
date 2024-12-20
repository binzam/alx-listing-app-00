import { PillProps } from '@/interfaces';
import React from 'react';

const Pill: React.FC<PillProps> = ({ label, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium transition-colors duration-300 m-2 hover:bg-blue-700 transition ${
        selected
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
