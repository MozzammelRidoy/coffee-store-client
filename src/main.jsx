import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import AddCoffee from './Component/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee/UpdateCoffee.jsx';
import Register from './Component/Register/Register.jsx';
import Login from './Component/Login/Login.jsx';
import AuthProvider from './Component/provider/AuthProvider.jsx';
import Users from './Component/Users.jsx/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/', 
        element: <Home/>,
        loader : () => fetch('https://coffee-store-server-uw3h.vercel.app/coffees')
      }, 
      {
        path: '/addCoffee', 
        element : <AddCoffee/>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee/>,
        loader : ({params}) => fetch(`https://coffee-store-server-uw3h.vercel.app/coffees/${params.id}`)
      }, 
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/login',
        element: <Login/>
      }, 
      {
        path: '/users',
        element: <Users/>,
        loader : () => fetch('https://coffee-store-server-uw3h.vercel.app/users')

      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
