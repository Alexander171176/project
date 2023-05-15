import React from 'react';

import { Header } from '../../../components/public/Header/Header'; // импортирование блока Header 

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { AdminLayout }