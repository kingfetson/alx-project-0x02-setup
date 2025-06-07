import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

export default function HomePage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
    setShowModal(false); // Close modal after adding
  };

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to the Home Page</h1>
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Add New Post
        </button>
        <PostModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddPost}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
}
