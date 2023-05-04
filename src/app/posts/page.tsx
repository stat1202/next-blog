import { getAllPosts } from '@/utils/posts'
import FilterablePosts from '@/components/FilterablePost'


export const metadata = {
  title: 'All Posts',
  description: '블로그 글'
}

export default async function PostsPage() {
  const posts = await getAllPosts()
  const categories = [... new Set(posts.map(post => post.category))]

  return (
    <FilterablePosts posts={posts} categories={categories}/>
  )
}
