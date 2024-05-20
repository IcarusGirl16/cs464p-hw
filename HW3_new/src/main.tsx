import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Main from './routes/main';
import Population from './routes/population';
import Custom from './routes/custom';
import List from './routes/list';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'main/',
    element: <Main />,
  },
  {
    path: 'list/',
    element: <List />,
  },
  {
    path: 'population/',
    element: <Population />,
  },
  {
    path: 'custom/',
    element: <Custom />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
