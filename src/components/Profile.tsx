import Image from 'next/image'
import profileImg from "../../public/images/profile.jpg"
import Link from 'next/link'

export default function Profile() {
  return (
    <section className='text-center mt-2'>
        <Image  src={profileImg} alt="profile" 
        className='w-64 h-64 rounded-full mx-auto'></Image>
        <h2 className='text-3xl font-bold mt-2'>Hi, I&apos;m SeungJae Han</h2>
        <h3 className='text-xl font-semibold'>Frontend engineer</h3>
        <Link href="/contact">
          <button className='mt-2 px-4 py-1 bg-stone-900 rounded font-bold text-white'>
            Contact Me
          </button>
        </Link>
    </section>
    
  )
}
