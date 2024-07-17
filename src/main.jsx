import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ECommerce from './layouts/ECommerce.jsx';

import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from './pages/ProductDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ECommerce />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:id',
        element: <ProductDetail />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
