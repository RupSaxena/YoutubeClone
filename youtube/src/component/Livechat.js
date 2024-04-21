import { useEffect } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Chatslice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const Livechat=()=>{
    const dispatch=useDispatch();
    const chatmessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i=setInterval(()=>{
dispatch(addMessage({name:generateRandomName(),message:makeRandomMessage(20)}))
    },500);
return ()=>clearInterval(i)
},[])
    return (
        <div className="w-full h-[550px] m-1 p-1 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div>
            {chatmessages.map((c,i)=>
            <Chatmessage key={i} name={c.name} message={c.message}/>)}</div></div>
    )
}
export default Livechat;