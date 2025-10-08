import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import AppDetails from '../Pages/AppDetails';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('/App1.json').then((res) => res.json()),
        element: <Home></Home>,
      },
      {
        path: '/apps',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element: <Apps />,
      },

      {
        path: '/appssss/:id',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element:<AppDetails></AppDetails>
      },
    ],
  },
]);
