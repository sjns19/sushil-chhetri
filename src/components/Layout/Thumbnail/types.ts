import type { ReactChildren } from '../../../types.g';

export default interface ThumbnailProps extends ReactChildren {
    link?: string,
    title?: string,
    name?: string,
    labels?: string[]
}