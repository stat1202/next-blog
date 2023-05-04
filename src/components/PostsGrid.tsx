import { Post } from "@/utils/posts"
import PostsCard from "./PostCard"

type Props = {posts: Post[] }

export default function PostsGrid({posts}: Props) {

  return(
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post => <li key={post.path}>
          <PostsCard post={post} />
      </li>))}
    </ul>
  )
}