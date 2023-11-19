import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalContext from '../../../infrastructure/context/globalProvider';
import '../../../infrastructure/language/i18n';
import Routes from '../routes';

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </React.StrictMode>,
);
