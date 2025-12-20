import type { ReactChildren } from '../../../types.g';

export interface ContainerProps extends ReactChildren {
    element?: React.ElementType | string,
    className?: string
}

export interface ContainerInnerProps extends ReactChildren { };