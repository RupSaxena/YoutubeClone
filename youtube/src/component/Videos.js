const Videos=({info})=>{

     const {statistics}=info;
     const {channelTitle,title,thumbnails}=info.snippet;
    return (<div className="p-2 m-2 w-72 shadow-lg">
    <img className="rounded-lg cursor-pointer"src={thumbnails.high.url} alt="videos"/>
    <ul>
        <li className="font-bold py-2">
            {title}
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewcount}</li> 
</ul>
    </div>)
}
export default Videos;