// components/common/Button.tsx
import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};


const Button: React.FC<ButtonProps> = ({ size = 'medium' , shape = 'rounded-md', children, onClick }) => {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  return (
    <button
      className={`${sizeClass} ${shape} bg-blue-500 text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

