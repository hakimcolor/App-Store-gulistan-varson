import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from 'react-router/dom';
import { router } from './Routes/Router';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />{' '}
    <ToastContainer position="top-center" autoClose={500} theme="colored" />
  </StrictMode>
);
