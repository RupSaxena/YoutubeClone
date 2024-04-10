import {useEffect,useState} from'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Videos from './Videos';
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
            {videos.map((video)=><Videos key={video.id} info={video}/>)}
            </div>
    );
}
export default Videocontainer