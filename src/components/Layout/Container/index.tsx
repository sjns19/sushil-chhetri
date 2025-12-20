import type { ContainerProps, ContainerInnerProps } from './types';

import css from './Container.module.scss';
import { createClassList } from '../../../utils';

export default function Container({ element, children, className }: ContainerProps) {
    const Element = element || 'div';
    const classList = createClassList({
        [css['container']]: true,
        [`${className}`]: className
    });

    return (
        <Element className={classList}>
            {children}
        </Element>
    );
}

Container.Inner = ({ children }: ContainerInnerProps) => (
    <div className={css['container-inner']}>
        {children}
    </div>
);