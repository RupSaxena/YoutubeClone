import {useEffect,useState} from'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Videos from './Videos';
import { Link } from 'react-router-dom';
const Videocontainer=()=>{
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
getyoutubeVideos();
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[videos]);
    const getyoutubeVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const jsondata=await data.json();
        setVideos(jsondata.items);
      
      
      console.log(videos)
     
    }
    return (
        <div className="flex flex-wrap">
            {videos.map((video)=>(
            <Link to={"/watch?v="+
            video.id}><Videos key={video.id} info={video}/></Link>))}
            </div>
    );
}
export default Videocontainer