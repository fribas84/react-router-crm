import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import { NewCustomer,action as actionNewCustomer } from './pages/NewCustomer';
import { Index, loader as customersLoader, loader } from './pages/Index';
import { ErrorPage } from './components/ErrorPage';
import { EditCusomer, loader as customerLoader} from './pages/EditCusomer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/customers/new',
        element: <NewCustomer />,
        action: actionNewCustomer
      },
      {
        path: '/customers/:customerId/edit',
        element: <EditCusomer />,
        loader: customerLoader,
        errorElement: <ErrorPage />
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
