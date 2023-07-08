import Link from 'next/link'
export const Navbar = () => {
  return (
    <div className="navbar text-base-content bg-base-100">
    <div className="flex-1">
      <Link href ='/' className="btn btn-ghost normal-case text-xl">Re:Match</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link href = '/'>Link</Link></li>
        <li>
          <details>
            <summary>
              Parent
            </summary>
            <ul className="p-2 bg-base-100">
              <li><Link href = '/'>Link 1</Link></li>
              <li><Link href = '/'>Link 2</Link></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  )
}
