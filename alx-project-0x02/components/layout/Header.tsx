// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
