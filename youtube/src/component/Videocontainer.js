import {useEffect,useState} from'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import Videos from './Videos';
const Videocontainer=()=>{
    const [videos,setvideos]=useState([]);
    useEffect(()=>{
getyoutubeVideos();
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const getyoutubeVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API);
        const jsondata=await data.json();
        setvideos(jsondata.items)
        console.log(videos);
        console.log(jsondata.items);
    }
    return (
        <div><Videos info={videos[0]}/></div>
    );
}
export default Videocontainer