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
import SignUp from './pages/SignUp.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import AdminPanel from './admin/AdminPanel.jsx'
import AdminSignup from './admin/AdminSignup.jsx'
import OrderHistory from './pages/OrderHistory.jsx'
import OrderDetail from './pages/OrderDetail.jsx'

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
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cartlist", element: <CartList /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/admin-login", element: <AdminLogin /> },
      { path: "/admin-signup", element: <AdminSignup /> },
      { path: "/admin-panel", element: <AdminPanel /> },

      // ⭐ Correct Order System Routes
      { path: "/orders", element: <OrderHistory /> },
      { path: "/orders/:id", element: <OrderDetail /> },
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
