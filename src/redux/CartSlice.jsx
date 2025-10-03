import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        carts:[]
    },
   reducers: {
    addproduct: (state, action) => {
      const item = action.payload;
      const existing = state.carts.find((p) => p.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.carts.push({ ...item, quantity: 1 }); 
      }
    }
  }
})

export const {addproduct}=CartSlice.actions;
export default CartSlice.reducer