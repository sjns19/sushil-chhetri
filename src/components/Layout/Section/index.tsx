import type { SectionProps, SectionContentProps } from './types';

import css from './Section.module.scss';
import { forwardRef } from 'react';
import { createClassList } from '../../../utils';
import { Wrapper } from '../';

const SectionElement: SectionProps = ({
    className,
    isVertical,
    hasRevealed,
    variant,
    children,
    ...rest
}, ref) => {
    const sectionClassList = createClassList({
        [css['section']]: true,
        [css[`section-${variant}`]]: variant,
        [`${className}`]: className,
    });

    const sectionInnerClassList = createClassList({
        [css['section-inner']]: true,
        [css['section-inner-vert']]: isVertical,
    });

    return (
        <section className={sectionClassList} ref={ref} {...rest} {...(hasRevealed ? { 'data-revealed': true } : {})}>
            <Wrapper>
                <div className={sectionInnerClassList}>
                    {children}
                </div>
            </Wrapper>
        </section>
    );
};

const SectionContent = ({ isSemi, className, children, ...rest }: SectionContentProps) => {
    const classList = createClassList({
        [css['section-content']]: true,
        [css['section-content-semi']]: isSemi,
        [`${className}`]: className,
    });
    return (
        <div className={classList} {...rest}>
            {children}
        </div>
    )
};

const Section = Object.assign(forwardRef(SectionElement), {
    Content: SectionContent
});

export default Section;