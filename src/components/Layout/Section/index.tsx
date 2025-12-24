import type { SectionProps, SectionContentProps } from './types';

import css from './Section.module.scss';

import { createClassList } from '../../../utils';
import { Wrapper } from '../';

export default function Section({
    className,
    isVertical,
    hasRevealed,
    variant,
    children,
    ...rest
}: SectionProps) {
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
        <section
            className={sectionClassList}
            {...rest}
            {...(hasRevealed ? { 'data-revealed': true } : {})}
        >
            <Wrapper>
                <div className={sectionInnerClassList}>
                    {children}
                </div>
            </Wrapper>
        </section>
    );
};

Section.Content = ({ isSemi, className, children, ...rest }: SectionContentProps) => {
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