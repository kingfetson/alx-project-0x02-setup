// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeClasses: Record<string, string> = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({ size = 'medium', shape = 'rounded-md', children }) => {
  const className = `bg-blue-600 text-white ${sizeClasses[size]} ${shape}`;
  return <button className={className}>{children}</button>;
};

export default Button;
