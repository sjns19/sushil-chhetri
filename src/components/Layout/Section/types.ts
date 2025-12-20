import type { ReactChildren } from '../../../types.g';

type ExtendableElementProps = ReactChildren & React.HTMLAttributes<HTMLDivElement>;

export interface SectionProps extends ExtendableElementProps {
    className?: string,
    variant?: 'light' | 'dark',
    isVertical?: boolean,
    hasRevealed?: boolean
}

export interface SectionContentProps extends ExtendableElementProps {
    className?: string,
    isSemi?: boolean
}