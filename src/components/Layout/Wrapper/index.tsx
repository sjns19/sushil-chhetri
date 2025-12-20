import type WrapperProps from './types';

import css from './Wrapper.module.scss';
import { createClassList } from '../../../utils';

export default function Wrapper({ element, children, className }: WrapperProps) {
	const Element = element || 'div';
	const classList = createClassList({
		[css['wrapper']]: true,
		[`${className}`]: className
	});

	return (
		<Element className={classList}>
			{children}
		</Element>
	);
}