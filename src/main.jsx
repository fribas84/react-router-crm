import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import { NewCustomer,action as actionNewCustomer } from './pages/NewCustomer';
import { Index, loader as customersLoader } from './pages/Index';
import { ErrorPage } from './components/ErrorPage';
import { EditCustomer, loader as customerLoader, action as actionEditCustomer} from './pages/EditCustomer';
import {action as deleteCustomerAction } from './components/Customer';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        action: actionNewCustomer,
        errorElement: <ErrorPage />
      },
      {
        path: '/customers/:customerId/edit',
        element: <EditCustomer />,
        loader: customerLoader,
        errorElement: <ErrorPage />,
        action: actionEditCustomer
      },
      {
        path: '/customers/:customerId/delete',
        action: deleteCustomerAction

    
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
