import Comments from "./Comments";

const Commentlist=({comments})=>{
    return comments.map((c,i)=>(
        <div key={i}>
        <Comments  data={c}/>
        <div className="pl-5 border border-l-black ml-5">
        <Commentlist comments={c.replies}/> 
        </div>
        </div>
    )
    )
}
export default Commentlist;