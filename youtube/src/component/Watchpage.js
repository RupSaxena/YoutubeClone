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
            height="600"
            src={"https://www.youtube.com/embed/" + searchparams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
</div>
<div  className="w-full">
    <Livechat/>
</div>
</div>
<Commentscontainer/>
</div>
    )
}
export default Watchpage;