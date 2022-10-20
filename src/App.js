import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Order from "./components/Order/Order";
import Delivery from './components/Delivery/Delivery';
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/delivery',
          element: <Delivery></Delivery>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/registration',
          element: <Registration></Registration>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
