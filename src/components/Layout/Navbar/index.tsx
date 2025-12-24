import type { NavbarLinkProps } from './types';

import css from './Navbar.module.scss';

import navbarData from '../../../static/navbar.json';
import Logo from '../../../assets/logos/logo.png';

import { MenuIcon, CloseIcon } from '../../Icons';

import { SocialMedia } from '../';
import { createClassList } from '../../../utils';
import useNavbar from '../../../hooks/useNavbar';

export default function Navbar() {
	const {
		isNavbarActive,
		toggleNavbar,
		activeSectionName,
		scrollToSection
	} = useNavbar();

	const navbarClassList = createClassList({
		[css['navbar']]: true,
		[css['navbar-active']]: isNavbarActive
	});

	return (
		<nav className={navbarClassList}>
			<div className={css['navbar-inner']}>
				<a className={css['navbar-content']} href={import.meta.env.DEV ? '/' : '/sushil-chhetri'} title="Sushil Chhetri">
					<img className={css['navbar-logo']} src={Logo} />
				</a>
				<button
					className={`${css['navbar-content']} ${css['navbar-toggler']} ${css['navbar-toggler-main']}`}
					title="Toggle Menu"
					onClick={toggleNavbar}
				>
					<MenuIcon size={20} />
				</button>
				<div className={`${css['navbar-content']} ${css['navbar-content-main']}`}>
					<button className={css['navbar-toggler']} title="Close Menu" onClick={toggleNavbar}>
						<CloseIcon size={20} />
					</button>
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