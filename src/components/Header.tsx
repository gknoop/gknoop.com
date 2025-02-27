export default function Header() {
	return (
		<header>
			{/* navbar */}
			<nav className="navbar navbar-expand-sm navbar-light bg-primary justify-content-center">
				<ul className="navbar-nav mr-auto">
					{/* logo */}
					<a className="navbar-brand">
						<img src="src/assets/gknoop-logo.svg" width="100" height="25" alt="gknoop.com" />
					</a>
					{/* links */}
					<li className="nav-item">
						<a className="nav-link" href="#">
							home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							about
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							blog
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}