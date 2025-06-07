import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import type { GetStaticProps } from 'next';
import type { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;