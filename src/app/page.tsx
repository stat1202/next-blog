import Profile from '@/components/Profile'
import FeaturedPosts from '@/components/FeaturedPosts'
import CarouselPosts from '@/components/CarouselPosts'

export default function HomePage() {
  return (
      <section className='p-4'>
        <Profile/>
        {/* @ts-expect-error Server Component */}
        <FeaturedPosts/>
        {/* @ts-expect-error Server Component */}
        <CarouselPosts/>
      </section>
  )
}
