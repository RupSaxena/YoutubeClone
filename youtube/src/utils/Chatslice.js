import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE } from "./constants";
const Chatslice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(OFFSET_LIVE,1);
            state.messages.push(action.payload);
        }
    }
})
export default Chatslice.reducer;
export const{ addMessage}=Chatslice.actions;