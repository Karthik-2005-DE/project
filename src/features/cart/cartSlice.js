import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.cartItems.find((i) => i.id === newItem.id);

      if (existing) {
        existing.quantity++;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      // Recalculate total
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    /* -------------- INCREASE QUANTITY (+) -------------- */
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.quantity++;
      }

      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    /* -------------- DECREASE QUANTITY (-) -------------- */
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item && item.quantity > 1) {
        item.quantity--;
      }

      // Prevent negative quantity
      if (item && item.quantity < 1) {
        item.quantity = 1;
      }

      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    /* -------------- REMOVE ITEM -------------- */
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== id);

      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    /* -------------- CLEAR CART -------------- */
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
