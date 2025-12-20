import type TextProps from './types';

import css from './Text.module.scss';

import { createClassList } from '../../../utils';

export default function Text({
	element,
	size,
	align,
	color,
	className,
	weight,
	uppercase,
	children,
	...rest
}: TextProps) {
	const Element = element || 'p';
	const classList = createClassList({
		[css['txt']]: css['txt'],
		[css[`txt-${size}`]]: size,
		[css[`txt-${color}`]]: color,
		[css[`txt-${weight}`]]: weight,
		[css[`txt-${align}`]]: align,
		[css[`txt-uppercase`]]: uppercase,
		[`${className}`]: className
	});

	return (
		<Element className={classList} {...rest}>
			{children}
		</Element>
	);
}