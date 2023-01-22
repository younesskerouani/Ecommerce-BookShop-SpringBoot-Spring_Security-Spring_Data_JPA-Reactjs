import { createSlice } from "@reduxjs/toolkit";
import React from 'react';

const userRedux = createSlice({
   name: "user",
   initialState: {
      currentUser: null,
      isFetching: false,
      error: false
   },
   reducers: {
      loginStart: (state) => {
         state.isFetching = true;
      },
      loginSuccess: (state, action) => {
         state.isFetching = false;
         state.currentUser = action.payload;
      },
      loginFailure: (state) => {
         state.isFetching = false;
         state.error = true;
      },
      logout: (state) => {
         localStorage.clear();
         state.currentUser = null;
         state.isFetching = false;
         state.error = false;
      },
      registerStart: (state) => {
         state.isFetching = true;
      },
      registerSuccess: (state, action) => {
         state.isFetching = false;
         state.currentUser = action.payload;
      },
      registerFailure: (state) => {
         state.isFetching = false;
         state.error = true;
      }
   }
});

export const { loginStart, loginSuccess, loginFailure, logout, registerFailure, registerSuccess, registerStart } = userRedux.actions;
export default userRedux.reducer;