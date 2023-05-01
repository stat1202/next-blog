import Link from 'next/link'
import { Inter, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900']
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div>
      {children}
    </div>
  )
}
