import {createSlice }from "@reduxjs/toolkit";
const Appslice=createSlice({
    name:"app",
    initialState:{
        ismenuopen:true
    },
    reducers:{
        togglemenu:(state)=>{
state.ismenuopen=!state.ismenuopen;
        }
    }
})
export const{togglemenu}=Appslice.actions;
export default Appslice.reducer