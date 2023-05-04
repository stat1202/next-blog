import Image from 'next/image'
import { Inter } from 'next/font/google'

import profileImg from "../../public/images/profile.jpg"
import { AiFillGithub } from 'react-icons/ai'

import Profile from '@/components/Profile'
import ContactForm from '@/components/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center '>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>hseungjae1202@naver.com</p>
      <div className='my-2 p-4'>
        <a href="https://github.com/stat1202" target="_blank" rel="noreferrer"
        className='text-5xl hover:text-sky-400'>
          <AiFillGithub/>
        </a>
      </div>
      <h2 className='text-3xl font-bold m-8'>Or Send me an email</h2>
      <ContactForm/>
    </section>
  )
}
