// components/common/Card.tsx

import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
