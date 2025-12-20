import type { ImageProps } from './types';

import { forwardRef } from 'react';

import css from './Image.module.scss';
import { createClassList } from '../../../utils';

const Image = forwardRef<HTMLImageElement, ImageProps>(({
    wrapperElement,
    className,
    zoominate,
    fit,
    ...rest
}, ref) => {
    const Element = wrapperElement || 'div';
    const wrapperClassList = createClassList({
        [css['image']]: true,
        [css['image-zoominate']]: zoominate,
        [`${className}`]: className
    });

    const imageClassList = createClassList({
        [css['image-img']]: true,
        [css[`image-img-${fit}`]]: fit
    });

    return (
        <Element className={wrapperClassList}>
            <img className={imageClassList} ref={ref} {...rest} />
        </Element>
    );
});

export default Image;