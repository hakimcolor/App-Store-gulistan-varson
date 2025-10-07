import React from 'react'
import Banner from '../Componentes/Banner'
import { useLoaderData } from 'react-router'
import App1fetce from './App1fetce';

const Home = () => {
  const AppData = useLoaderData();
  console.log(AppData);
  
  return (
    <div>
      <Banner></Banner>
      <App1fetce AppData={AppData}></App1fetce>
    </div>
  );
}

export default Home
