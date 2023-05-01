import Image from 'next/image'
import { Inter } from 'next/font/google'

import profileImg from "../../public/images/profile.jpg"

import Profile from '@/components/Profile'

const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
  return (
      <main>        
        Posts 페이지
      </main>
  )
}
