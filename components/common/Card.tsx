import { CardProps } from '@/interfaces';
import Image from 'next/image';
import React from 'react';

const Card: React.FC<CardProps> = ({ name, image, price, rating }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={192}
        className="w-full h-48 object-top object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">Price: ${price} / night</p>
        <p className="text-sm text-yellow-500">Rating: {rating} ⭐</p>
      </div>
    </div>
  );
};

export default Card;
