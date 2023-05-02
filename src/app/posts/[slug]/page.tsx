import PostContent from "@/components/PostContent";
import { getPostData } from "@/utils/posts";
import Image from "next/image";


type Props={
  params:{
    slug: string;
  }
}

export default async function PostPage({params: {slug}}: Props) {

  const post = await getPostData(slug)
  const {title, path, next, prev} = post

  return (
    <article className="rounded-2xl overflow-hidden h-fit bg-gray-100 shadow-lg m-4">
      <Image src={`/images/posts/${path}.png`} 
      alt={title} width={760} height={420}
      className="w-full h-1/5 max-h-[500px]"/>
      <PostContent post={post}/>
      <section>
        {prev &&<p>{prev.title}</p>}
        {next &&<p>{next.title}</p>}
      </section>
    </article>


  )
}