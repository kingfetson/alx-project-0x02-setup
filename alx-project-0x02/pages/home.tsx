// pages/home.tsx
import React from 'react';
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Card title="Card 1" content="This is the content of the first card." />
      <Card title="Card 2" content="Here is some different content for another card." />
    </div>
  );
};

export default Home;
