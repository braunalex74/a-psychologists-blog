import React from 'react';

import Header from './Header/Header';

export const Blog = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Header />
    </div>
  );
};
