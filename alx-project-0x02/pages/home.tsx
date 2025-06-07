// pages/home.tsx

import React from 'react';
import Card from '../components/common/Card';

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>
      <Card title="Welcome!" content="This is the home page of our app." />
      <Card title="Reusable Card" content="This card is rendered using a reusable component." />
    </div>
  );
};

export default HomePage;
