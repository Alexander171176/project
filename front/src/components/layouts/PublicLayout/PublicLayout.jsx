import React from 'react';

import { Header } from '../../../components/public/Header/Header'; // импортирование блока Header 

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { PublicLayout }