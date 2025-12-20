import type { ReactChildren } from '../../../types.g';

export default interface WrapperProps extends ReactChildren {
    element?: React.ElementType | string,
    className?: string
}