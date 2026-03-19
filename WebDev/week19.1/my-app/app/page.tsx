import { prisma } from "./lib/db"

export default async function Home(){
  const posts = await prisma.user.findMany()
  return (
    <div>
      {
        posts.map(p=>(
          <div key={p.id}>{p.content}</div>
        ))
      }
    </div>
  )
}