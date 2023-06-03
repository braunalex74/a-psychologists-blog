import React from 'react';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import Main from './Main/Main';
import { BlogContainer } from './Blog.styled';

export const Blog = () => {
  return (
    <BlogContainer>
      <Header />
      <Hero />
      <Main />
    </BlogContainer>
  );
};
