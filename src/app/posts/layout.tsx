import Link from 'next/link'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900']
})


export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const menus = ['All Posts', 'My Story', 'Frontend', 'JavaScript']

  return (
    <main className='flex'>
      <div className='flex basis-0 grow'>
        {children}
      </div>
    </main>
    
  )
}
