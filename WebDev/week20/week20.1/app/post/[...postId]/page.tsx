

export default async function Post({params} : {params : {postId : number[]}}){
    const postId = (await params).postId
    
    return(
        <div>
            {JSON.stringify(postId)}            
        </div>
    )
}