import React from 'react';
import Heder from '../Componentes/Heder';
import { Outlet } from 'react-router';
import Footer from '../Componentes/Footer';

const Root = () => {
  return (
    <div>
      <Heder></Heder>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
