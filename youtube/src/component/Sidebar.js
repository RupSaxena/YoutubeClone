import {useSelector } from 'react-redux';
const Sidebar=()=>{
    const ismenuopen=useSelector((store)=>store.app.ismenuopen);
    if(!ismenuopen) return null;
    return (
        <div>

            <ul>
                <li>Home</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            </ul>
            <h1>You</h1>
            <ul>
                <li>Your Channel</li>
            <li>History</li>
            <li>Live videos</li>
            <li>Liked Videos</li>
            </ul>
            <h1>Watch later</h1>
            <ul>
                <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            </ul>
            <h1>Explore</h1>
            <ul>
                <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Courses</li>
            <li>Fashion & Beauty</li>
            <li>Podcasts</li>
            </ul>
            <ul>
                <li>Settings</li>
                <li>Report History</li>
                <li>Help</li>
                <li>Feedback</li>
            </ul>
        </div>
    )
}
export default Sidebar;