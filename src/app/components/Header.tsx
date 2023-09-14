import Link from "next/link";

const Header = () => {
  return (
    <header className='shadow-lg'>
      <nav className='flex flex-col'>
        <h3 className='p-3 text-xl font-bold'>React Hooks</h3>
        <ul className='p-3 space-x-2 flex'>
          <p className='hover:text-slate-500'><Link href={'/'}>useState</Link></p>
          <p className='hover:text-slate-500'><Link href={'/'}>useEffect</Link></p>
          <p className='hover:text-slate-500'><Link href={'/'}>useCallback</Link></p>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
