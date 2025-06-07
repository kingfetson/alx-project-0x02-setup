import React from 'react';
import type { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-3">{content}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
