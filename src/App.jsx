import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css"
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App