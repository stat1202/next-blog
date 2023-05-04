import Image from 'next/image'
import { Inter } from 'next/font/google'

import profileImg from "../../public/images/profile.jpg"

import Profile from '@/components/Profile'

const inter = Inter({ subsets: ['latin'] })

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2'

export default function AboutPage() {
  return (
    <>
      <Profile/>
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS} >Who Am I?</h2>
        <p>
          웹 프론트엔트 개발자 <br/>
          지속가능한 개발자
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          GameUniv 팀 프로젝트 <br/>
          Catchnow 외주 참여 <br/>
        </p>
      </section>
    </>

  )
}
