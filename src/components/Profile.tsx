import Image from 'next/image'
import profileImg from "../../public/images/profile.jpg"
import Link from 'next/link'

export default function Profile() {
  return (
    <div className='flex flex-col items-center pt-4'>
      <Image  src={profileImg} alt="profile" 
      className='w-80 h-80 max-sm:w-60 max-sm:h-60 rounded-full'></Image>
      <h2 className='pt-2.5 font-bold text-2xl max-sm:text-lg'>Hi, I&apos;m SeungJae Han</h2>
      <p className='pt-2.5 font-semibold max-sm:text-base'>Frontend engineer</p>
      <Link href="/contact"
      className='mt-2.5 px-2 py-1 bg-stone-900 rounded font-semibold text-white'>Contact Me</Link>
    </div>
  )
}
