import { Outlet } from 'react-router-dom';

import { Header } from '../../../components/public/Header/Header'; // импортирование блока Header 

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { PublicLayout }