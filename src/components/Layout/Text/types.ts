import type { ReactChildren } from '../../../types.g';

type ReactAttributes = ReactChildren & React.HTMLAttributes<HTMLElement>;

export default interface TextProps extends ReactAttributes {
	element?: React.ElementType | string,
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
	color?: 'accent' | 'accent-light' | 'grey-100' | 'grey-200' | 'grey-300' | 'grey-400' | 'grey-500',
	align?: 'center',
	uppercase?: boolean,
	className?: string,
	weight?: 'light' | 'medium' | 'bold'
}