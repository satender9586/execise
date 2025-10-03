import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice"
import CartSlice from "./CartSlice"
 
export const Store = configureStore({
    reducer:{
        "serach":SearchSlice,
        "cart":CartSlice
    }
})
