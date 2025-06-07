import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p>This page contains information about our project.</p>
        <div className="space-x-4 mt-4">
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </main>
    </>
  );
}
