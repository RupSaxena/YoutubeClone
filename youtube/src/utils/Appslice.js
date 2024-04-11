import {createSlice }from "@reduxjs/toolkit";
const Appslice=createSlice({
    name:"app",
    initialState:{
        ismenuopen:true
    },
    reducers:{
        togglemenu:(state)=>{
state.ismenuopen=!state.ismenuopen;
        },
        closemenu:(state)=>{
            state.ismenuopen=false;
        }
    }
})
export const{togglemenu, closemenu}=Appslice.actions;
export default Appslice.reducer