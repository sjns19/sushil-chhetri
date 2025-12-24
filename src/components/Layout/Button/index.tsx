import type ButtonProps from './types';

import css from './Button.module.scss';

import { Link } from 'react-router';
import { createClassList } from '../../../utils';

export default function Button({
    variant,
    size,
    children,
    link,
    className,
    type,
    ...rest
}: ButtonProps) {
    const classList = createClassList({
        [css['btn']]: css['btn'],
        [css[`btn-${variant}`]]: variant,
        [css[`btn-${size}`]]: size,
        [`${className}`]: className
    });

    if (link) {
        return (
            <Link className={classList} to={link} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classList} type={type || 'button'} {...rest}>
            {children}
        </button>
    );
}