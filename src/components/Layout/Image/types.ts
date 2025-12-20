export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    wrapperElement?: React.ElementType | string,
    className?: string,
    fit?: 'cover' | 'contain',
    zoominate?: boolean
}