import Image from 'next/image'
import Link from 'next/link'
import { NavbarItems } from './NavbarItems'
import { UserAvatar } from './UserAvatar'

export const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 w-full bg-base-100">
			<div className="navbar mx-auto max-w-7xl text-base-content">
				<div className="navbar-start">
					<Link href="/feed/books" className="btn-ghost hidden text-xl normal-case sm:btn">
						Re:Match
					</Link>
				</div>
				<div className="navbar-center hidden sm:flex">
					<ul className="menu menu-horizontal px-1">
						<NavbarItems />
					</ul>
				</div>
				<div className="navbar-end">
					<div className="dropdown-end dropdown">
						<button type="button" tabIndex={0} className="btn-ghost btn-circle avatar btn">
							<div className="w-10 rounded-full">
								<Image src="/IconPerson.png" width={40} height={0} alt="IconPerson" />
							</div>
						</button>
						<UserAvatar />
					</div>
					<div className="dropdown-end dropdown sm:hidden">
						<button type="button" tabIndex={0} className="btn-ghost btn-circle btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
							</svg>
						</button>
						<ul className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow outline outline-1 outline-base-200">
							<NavbarItems/>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}
