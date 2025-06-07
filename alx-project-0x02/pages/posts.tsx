import Header from '@/components/layout/Header';
import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import type { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await res.json();

      const formattedPosts = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default PostsPage;
