import Link from 'next/link'
import './globals.css'
import { Open_Sans } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footers'

const sans = Open_Sans({ subsets: ['latin'] })



export const metadata = {
  title: {
    default: "HSJ's Blog",
    template: "HSJ's Blog | %s"
  },
  description: '지속 가능한 개발자를 꿈꾸는 블로그',
  icons: {
    icon: '/favicon.ico',
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const menus = ['Home', 'About', 'Posts', 'Contact']

  return (
    <html lang="en" className={sans.className}>
      <body className='flex flex-col w-full mx-auto'>
        <Header/>
        <main className='grow max-w-screen-2xl w-full mx-auto'>
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
