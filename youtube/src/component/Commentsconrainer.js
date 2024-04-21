import Commentlist from "./Commentlist";


const commentsdata=[
    {
        name:"rupal",
        text:"lorem ipsum",
        replies:[]
    },{
        name:"rupal",
        text:"lorem ipsum",
        replies:[
            {
                name:"rupal",
                text:"lorem ipsum",
                replies:[]
            }
        ]
    },{
        name:"rupal",
        text:"lorem ipsum",
        replies:[{
            
            name:"rupal",
            text:"lorem ipsum",
            replies:[]
        
        },{
        name:"rupal",
        text:"lorem ipsum",
        replies:[]
    }]
    },{
        name:"rupal",
        text:"lorem ipsum",
        replies:[]
    
    }
]
const Commentscontainer=()=>{
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments</h1>
            <Commentlist comments={commentsdata}/>
            </div>
    )
}
export default Commentscontainer;