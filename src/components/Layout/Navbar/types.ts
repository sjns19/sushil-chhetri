import type { ReactChildren } from '../../../types.g';

type ExtendableLinkProps = ReactChildren & React.HTMLAttributes<HTMLAnchorElement>;

export interface NavbarLinkProps extends ExtendableLinkProps {
	isActive?: boolean
}