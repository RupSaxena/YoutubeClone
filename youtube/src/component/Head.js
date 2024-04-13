import { togglemenu } from "../utils/Appslice";
import {useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Head=()=>{
    const [searchquery,setsearchquery]=useState("");
    const [suggestions,setsuggestions]=useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    useEffect(()=>{
        const timer=setTimeout(() => 
            getSuggestion()
        , 200);
        return()=>{
        clearTimeout(timer) 
        }
        
    },[searchquery])
    const getSuggestion=async()=>{
const data=await fetch(YOUTUBE_SEARCH_API+searchquery);
const jsondata=await data.json();
setsuggestions(jsondata[1]);

    }
    const dispatch=useDispatch();
    const handlemenu=()=>{
        dispatch((togglemenu()))
    }
return (
<div className="grid grid-flow-col p-5 m-2 shadow-lg">
    <div className="flex col-span-1">
 <img onClick={()=>handlemenu()}className="cursor-pointer h-8"alt="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"width="70px" />
<a href="/"><img className="h-10 mx-2"alt="youtube" src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" width="150px"/></a>
</div>
<div className="col-span-10 px-10">
    <div>   <input className="border border-gray-400 h-9 px-5 p-2 w-1/2 rounded-l-full" type="text" value={searchquery} onChange={(e)=>setsearchquery(e.target.value)}  onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}/>
    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">Search</button>
    </div>
    {showSuggestions && (
    <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
<ul>
    {suggestions.map((s)=>(
        <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
    ))}
     {/* <li className="py-2 px-3 shadow-sm hover:bg-gray-100">s</li> */}
</ul>
    </div>)}
</div>
<div className="col-span-1"><img className="h-13"alt="user"src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" width="50px"/>
</div>

</div>
);
}
export default Head;