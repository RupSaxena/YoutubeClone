import { togglemenu } from "../Appslice";
import {useDispatch} from 'react-redux';
const Head=()=>{
    const dispatch=useDispatch();
    const handlemenu=()=>{
        dispatch((togglemenu()))
    }
return (
<div className="font-bold text-white-200 flex justify-between w-12/12 p-1 m-1 shadow-lg">
    <div className="flex justify-between w-6/6 h-16 col-span-1">
 <img onClick={()=>handlemenu()}className="h-13"alt="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"width="70px" />
<img className="h-15"alt="youtube" src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" width="150px"/></div>
<div className="flex justify-between">
    <input className="border border-gray-500 h-9 p-2 rounded-l-full" type="text" placeholder="Search here...."/>
    <button className="border border-black h-9 bg-gray-400 text-white rounded-r-full w-20">Search</button>
</div>
<div className="col-span-1"><img className="h-13"alt="user"src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" width="50px"/></div>
</div>
);
}
export default Head;