import type { NavbarLinkProps } from './types';



import css from './Navbar.module.scss';
import navbarData from '../../../static/navbar.json';

import { SocialMedia } from '../';

import useNavbar from '../../../hooks/useNavbar';

import Logo from '../../../assets/logos/logo.png';

export default function Navbar() {
	const { activeSectionName, scrollToSection } = useNavbar();

	return (
		<nav className={css['navbar']}>
			<div className={css['navbar-inner']}>
				<a href="/" className={css['navbar-brand']} title="Sushil Chhetri">
					<img className={css['navbar-logo']} src={Logo} />
				</a>
				<ul className={css['navbar-nav']}>
					{navbarData.map(({ name, title }, idx) => (
						<NavbarLink
							key={idx}
							onClick={scrollToSection(name)}
							isActive={activeSectionName === name}
						>
							{title}
						</NavbarLink>
					))}
				</ul>
				<div className="p-1">
					<SocialMedia />
				</div>
			</div>
		</nav>
	);
}

const NavbarLink = ({ isActive, children, ...rest }: NavbarLinkProps) => (
	<li className={css['navbar-nav-item']}>
		<a className={`${css['navbar-nav-link']} ${isActive ? css['active'] : ''}`} {...rest}>
			{children}
		</a>
	</li>
);