import { getAllPosts } from '@/utils/posts'
import FilterablePosts from '@/components/FilterablePost'


export default async function PostsPage() {
  const posts = await getAllPosts()
  const categories = [... new Set(posts.map(post => post.category))]

  return (
    <FilterablePosts posts={posts} categories={categories}/>
  )
}
