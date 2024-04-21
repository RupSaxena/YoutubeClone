const GOOGLE_API_KEY="AIzaSyAatEByPhMwFyBINgC35ltitvVMu0xKAUw";
//Gooogle api key have limited calling per day so i have to replace the key with the other one  when one key call is over
//const GOOGLE_API_KEY="AIzaSyD99hQf0uTLDRqBb8DQkQxg5Jev9LBu97g";
export const YOUTUBE_VIDEOS_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const OFFSET_LIVE=10;