import axios from "axios";

async function fetchBlogs() {
  const response = await axios.get("https://dummyjson.com/posts");
  return response.data.posts;
}

export default async function Blog() {
  const blogs = await fetchBlogs();

  return (
    <div>
      {blogs.map((blog: TodoSchema) => (
        <Todo id={blog.id} title={blog.title} />
      ))}
    </div>
  );
}

interface TodoSchema {
  id: number;
  title: string;
}

function Todo({ id, title }: TodoSchema) {
  return (
    <div>
      {id}. {title}
    </div>
  );
}
