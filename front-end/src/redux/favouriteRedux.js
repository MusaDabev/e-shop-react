import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProductToFav: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      
    },
  },
});

export const { addProductToFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;