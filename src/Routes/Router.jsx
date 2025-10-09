import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Root from '../Pages/Root';
import Loading from '../Pages/Loding';

const Home = lazy(() => import('../Pages/Home'));
const Apps = lazy(() => import('../Pages/Apps'));
const AppDetails = lazy(() => import('../Pages/AppDetails'));
const Installation = lazy(() => import('../Pages/INstallation'));

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
        path: 'apps',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading />}>
            <Apps />
          </Suspense>
        ),
      },
      {
        path: 'appssss/:id',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading />}>
            <AppDetails />
          </Suspense>
        ),
      },
      {
        path: 'install',
        loader: () => fetch('/App2.json').then((res) => res.json()),
        element: (
          <Suspense fallback={<Loading />}>
            <Installation />
          </Suspense>
        ),
      },
    ],
  },
]);
