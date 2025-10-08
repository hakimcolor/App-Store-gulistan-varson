import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Root from '../Pages/Root';
import Apps from '../Pages/Apps';
import AppDetails from '../Pages/AppDetails';
import Loading from '../Pages/Loding';


const Home = lazy(() => import('../Pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        loader: () => fetch('/App1.json').then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/apps',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element: <Apps />,
      },
      {
        path: '/appssss/:id',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element: <AppDetails />,
      },
    ],
  },
]);
