

export default async function morePost({params} : {params : {morePostId: number[]}}){
    const postId  = (await params).morePostId
    return (
        <div>
            <div>This will render on morePost "http://localhost:3000/morePost" no matter further routes are given or not</div>
            {JSON.stringify(postId)}
        </div>
    )
}