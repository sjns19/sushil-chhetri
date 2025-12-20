import type { NavbarLinkProps } from './types';

import css from './Navbar.module.scss';
import { useEffect, useState } from 'react';

import navbarData from '../../../static/navbar.json';

import { SocialMedia } from '../';
import { ucfirst } from '../../../utils';

export default function Navbar() {
	const [activeSectionName, setActiveSectionName] = useState('');

	useEffect(() => {
		setActiveSectionName('home');

		const
			sections = document.querySelectorAll('section');

		let
			scrollCallback = null,
			currentSectionName = '';

		const setActiveSection = (element?: Element) => {
			if (!element)
				return;

			const
				sectionName = element.id,
				isRevealed = element.getAttribute('data-revealed');

			setActiveSectionName(sectionName);

			if (!isRevealed) {
				element.setAttribute('data-revealed', 'true');
			}

			document.title = sectionName === 'home' ? 'Sushil Chhetri' : 'Sushil Chhetri - ' + ucfirst(sectionName);
		};

		if ('IntersectionObserver' in window) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((element) => {
					if (element.isIntersecting && activeSectionName !== element.target.id) {
						setActiveSection(element.target);
					}
				});
			}, {
				rootMargin: '-50% 0% -50% 0%'
			});

			sections.forEach((section) => observer.observe(section));
		} else {
			scrollCallback = () => {
				let
					maxHeight = 0,
					activeSection = '',
					activeElement;

				sections.forEach((section) => {
					const
						rect = section.getBoundingClientRect(),
						windowHeight = window.innerHeight || document.documentElement.clientHeight,
						windowWidth = window.innerWidth || document.documentElement.clientWidth,
						visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0),
						visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0),
						final = visibleHeight * visibleWidth;

					if (final > maxHeight) {
						maxHeight = final;
						activeSection = section.id;
						activeElement = section;
					}
				});

				if (activeSection !== currentSectionName) {
					setActiveSection(activeElement);
					currentSectionName = activeSection;
				}
			}
		}

		if (scrollCallback) {
			window.addEventListener('scroll', scrollCallback);
			window.addEventListener('resize', scrollCallback);
		}

		return () => {
			if (scrollCallback) {
				window.removeEventListener('scroll', scrollCallback);
				window.removeEventListener('resize', scrollCallback);
			}
		};
	}, []);

	const scrollToSection = (sectionName: string) => () => {
		window.scrollTo({
			top: document.getElementById(sectionName)?.offsetTop
		})
	};

	return (
		<nav className={css['navbar']}>
			<div className={css['navbar-inner']}>
				<a href="/" className={css['navbar-brand']} title="Sushil Chhetri">
					<img className={css['navbar-logo']} src="/logos/logo.png" />
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