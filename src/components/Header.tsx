import Link from "next/link";

export default function Header() {
  return(
    <header className="flex justify-center bg-stone-900 text-white">
      <div className="flex justify-between items-center p-4 max-w-screen-2xl w-full">
        <Link href='.'>
          <h1 className="text-3xl font-bold">{"HSJ's Blog"}</h1>
        </Link>
        <nav className="flex gap-4">
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/posts'>Posts</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </div>
      
    </header>
  )
}