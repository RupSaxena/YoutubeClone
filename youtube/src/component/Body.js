import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";

const Body=()=>{
    return (
        <div className="flex">
            <Sidebar/>
            <Maincontainer/>
        </div>
    )
}
export default Body;