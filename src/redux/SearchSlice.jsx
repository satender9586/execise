import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:"filter",
    initialState:{
        search:""
    },
    reducers:{
        search : (state, actions)=>{
            state.search=actions.payload
        }
    }
})

export const {search} = SearchSlice.actions;
export default SearchSlice.reducer