import { getNonFeaturedPosts } from "@/utils/posts"

import PostsCard from "./PostCard"
import MultiCarousel from "./MultiCarousel"

export default async function CarouselPosts() {

  const posts = await getNonFeaturedPosts()

  return(
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">You May Like</h2>
      <MultiCarousel>
        {
          posts.map( post=> <PostsCard key={post.path} post={post}/>)
        }
      </MultiCarousel>
    </section>
  )
}