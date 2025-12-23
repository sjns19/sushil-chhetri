import type { ReactChildren } from '../../../types.g';

type ExtendableElementProps = ReactChildren & React.HTMLAttributes<HTMLDivElement>;

interface Section extends ExtendableElementProps {
    className?: string,
    variant?: 'light' | 'dark',
    isVertical?: boolean,
    hasRevealed?: boolean
}

export type SectionProps = React.ForwardRefRenderFunction<HTMLElement, Section>;

export interface SectionContentProps extends ExtendableElementProps {
    className?: string,
    isSemi?: boolean
}