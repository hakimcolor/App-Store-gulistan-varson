import React from 'react';
import Heder from '../Componentes/Heder';
import { Outlet } from 'react-router';
import Footer from '../Componentes/Footer';
import ScrollToTop from './ScrollToTop';

const Root = () => {
  return (
    <div>
      <Heder></Heder>
      <ScrollToTop/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
