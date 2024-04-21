import { useEffect,useState } from "react";
import Chatmessage from "./Chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Chatslice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
const Livechat=()=>{
    const [livemessage,setlivemessage]=useState("")
    const dispatch=useDispatch();
    const chatmessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i=setInterval(()=>{
dispatch(addMessage({name:generateRandomName(),message:makeRandomMessage(20)}))
    },2000);
return ()=>clearInterval(i)
},[])
    return (
        <>
        <div className="w-full h-[550px] m-1 p-1 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div>
            {chatmessages.map((c,i)=>
            <Chatmessage key={i} name={c.name} message={c.message}/>)}</div></div>
            <form className="w-full p-2 ml-2 border border-black"onSubmit={(e)=>{e.preventDefault();
            dispatch(addMessage({
                name:"rupal",
                message:livemessage
            }));
            setlivemessage("")}}>
                <input className="w-96 px-2 border"type="text" value={livemessage} onChange={(e)=>setlivemessage(e.target.value)}/>
                <button className="px-2 mx-2 bg-green-100">Send</button>
            </form>
            </>
    )
}
export default Livechat;