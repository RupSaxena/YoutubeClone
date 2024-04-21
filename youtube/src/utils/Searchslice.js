import { createSlice } from'@reduxjs/toolkit';
const Searchslice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
state=Object.assign(state,action.payload);
        }
    }}
);
export const{ cacheResults }=Searchslice.actions;
export default Searchslice.reducer;
