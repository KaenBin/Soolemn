import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setInitialLoad: (state, action) => {
      state.cart = action.payload;
    },
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (x) => x.product_id !== action.payload.product_id
      );
    },
    removeAll: (state) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { setInitialLoad, addtoCart, removeCart, removeAll } =
  cartSlice.actions;
