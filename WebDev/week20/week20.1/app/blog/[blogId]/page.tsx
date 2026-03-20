import axios from "axios";

export default async function Blog({
  params,
}: {
  params: {
    blogId: number;
  };
}) {
  const postId = (await params).blogId;
  const response = axios.get(`https://dummyjson.com/posts/${postId}`);
  const data = (await response).data;
  return (
    <div>
      <h1 className="text-blue-500 text-6xl flex justify-center font-bold mt-10">
        Blog Post {postId}
      </h1>
      <div className="flex items-center mt-10 text-lg justify-center">
            <h1>{data.id}. </h1>
            <h1 className="ml-1">{data.title}</h1>
      </div>
    </div>
  );
}
