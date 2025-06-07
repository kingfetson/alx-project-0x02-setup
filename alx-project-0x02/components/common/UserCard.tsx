import React from 'react';
import type { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm">{address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
