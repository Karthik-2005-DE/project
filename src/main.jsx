import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.jsx'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import ProductPage from './pages/ProductPage.jsx'
import { store } from "./app/store.js";
import { Provider } from 'react-redux'

import CartList from './pages/CartList.jsx'
import prouduct from './data/ProductData.js'
import ProductDetail from './pages/ProductDetails.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
   {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <App /> },
      { path: "/login", element: <Login /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:id", element: <ProductDetail /> },   // FIXED
      { path: "/cartlist", element: <CartList /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
  </StrictMode>
)
