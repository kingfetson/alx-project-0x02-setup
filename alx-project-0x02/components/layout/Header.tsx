import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
