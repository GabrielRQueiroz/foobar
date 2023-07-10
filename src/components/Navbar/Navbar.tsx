import Image from 'next/image'
import Link from 'next/link'
import { UserAvatar } from './UserAvatar'

export const Navbar = () => {
	return (
		<nav className="navbar sticky left-0 right-0 top-0 z-50 bg-base-100 text-base-content">
			<div className="flex-1">
				<Link href="/feed/books" className="btn-ghost btn text-xl normal-case">
					Re:Match
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown-end dropdown">
					<button type="button" tabIndex={0} className="btn-ghost btn-circle avatar btn">
						<div className="w-10 rounded-full">
							<Image src="/IconPerson.png" width={40} height={0} alt="IconPerson" />
						</div>
					</button>
					<UserAvatar />
				</div>
			</div>
		</nav>
	)
}
