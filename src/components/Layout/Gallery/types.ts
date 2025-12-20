import type { GalleryData, ReactChildren } from '../../../types.g';

export interface GalleryTabProps extends ReactChildren {
    isActive: boolean
}

export type GalleryVideoFrameProps = {
    src: string
}

export type GalleryTabDataProps = {
    type: 'videos' | 'images',
    category?: string,
    loadImages?: (elem: HTMLImageElement) => void,
    setActiveSlideIndex?: (index: number) => void,
    data: GalleryData
}