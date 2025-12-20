import type FlexProps from './types';

import css from './Flex.module.scss';

import { createClassList } from '../../../utils';

export default function Flex({
	element,
	justify,
	align,
	dir,
	wrap,
	className,
	children,
	...rest
}: FlexProps) {
	const Element = element || 'div';
	const classes = createClassList({
		[css['flex']]: true,
		[css[`justify-${justify}`]]: justify,
		[css[`align-${align}`]]: align,
		[css[`dir-${dir}`]]: dir,
		[css[`${wrap}`]]: wrap,
		[`${className}`]: className
	});

	return (
		<Element className={classes} {...rest}>
			{children}
		</Element>
	);
}