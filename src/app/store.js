import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import adminReducer from "../features/admin/adminSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    admin: adminReducer,


  },
});
