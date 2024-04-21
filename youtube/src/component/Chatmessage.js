const Chatmessage=({name ,message})=>{
    return (
        <div>
            <img className="h-13"alt="user"src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" width="50px"/>
            <span className="">{name}</span>
            <span className="">{message}</span>
        </div>
    )
}
export default Chatmessage;