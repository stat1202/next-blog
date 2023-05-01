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
      <aside className='w-32 flex flex-col text-center'>
        <h2 className='font-bold text-lg p-2' >Category</h2>
        <ul className='text-sm'>
          {
            menus.map( (menu,i) => {
              return <li className='px-2 py-1'
              key={i}>{menu}</li>
            })
          }
        </ul>
      </aside>
    </main>
    
  )
}
