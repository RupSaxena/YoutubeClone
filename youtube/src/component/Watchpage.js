import { useEffect } from "react";
import{ useDispatch }from 'react-redux'
import { closemenu } from "../utils/Appslice";
import { useSearchParams } from "react-router-dom";

import Commentscontainer from "./Commentsconrainer";
import Livechat from "./Livechat";
const Watchpage=()=>{
    const [searchparams]=useSearchParams();

    const dispatch=useDispatch();
   
    useEffect(()=>{
   dispatch(closemenu());
    });

    return (
        <div className="flex flex-col w-full">
<div className="px-5 flex w-full">
    <div>
<iframe
            width="1100"
            height="580"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
</div>
<div  className="w-full">
   <div className="flex"><p className="font-bold">LIVECHAT</p>
    <img alt="red" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZk3oT89jzKou0awXqtdH7RUZ8ZjrLYswyw&s" width="28px"/>
    </div>
    <Livechat/>
</div>
</div>
<Commentscontainer/>
</div>
    )
}
export default Watchpage;