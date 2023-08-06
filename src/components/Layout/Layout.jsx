import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import * as css from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <css.Main>
        <Outlet />
      </css.Main>
    </>
  );
};

export default Layout;
