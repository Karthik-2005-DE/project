import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    isAdminLogged: false,
    currentAdmin: null,

    // FIXED: correct name is "admins", not "admin"
    admins: [
      { email: "admin@gmail.com", password: "admin@369" },
    ],
  },

  reducers: {
    adminSignup: (state, action) => {
      state.admins.push(action.payload);   // now works
    },

    adminLogin: (state, action) => {
      state.isAdminLogged = true;
      state.currentAdmin = action.payload;
    },

    adminLogout: (state) => {
      state.isAdminLogged = false;
      state.currentAdmin = null;
    },
  },
});

export const { adminSignup, adminLogin, adminLogout } = adminSlice.actions;
export default adminSlice.reducer;
