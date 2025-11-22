import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import prouduct from './data/ProductData.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/Login",
        element: <Login/>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
