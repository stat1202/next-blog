'use client'

import { Post } from "@/utils/posts"
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

type Props={
  posts: Post[];
  categories: string[]
}

const ALL_POSTS = 'ALL Posts'

export default function FilterablePosts( {posts, categories}: Props){
  
  const [selected ,setSeleted] = useState(ALL_POSTS)
  const filtered = 
    selected === ALL_POSTS 
    ? posts 
    : posts.filter(post => post.category === selected)


  return(
    <section className="flex m-4">
      <PostsGrid posts={filtered} />
      <Categories categories={ [ALL_POSTS, ...categories]}
      selected={selected} onClick={setSeleted}/>
    </section>
  )
}