import React from 'react';
import type { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500">
        {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
