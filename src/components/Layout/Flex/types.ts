import type { ReactChildren } from '../../../types.g';

type ExtendableElementProps = ReactChildren & React.HTMLAttributes<Element>;

export default interface FlexProps extends ExtendableElementProps {
	element?: React.ElementType | string,
	justify?: string,
	align?: string,
	wrap?: string,
	className?: string,
	dir?: string
};