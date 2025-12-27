
import type { Dictionary, GalleryImages } from '../../../types.g';
import type { GalleryTabProps, GalleryTabDataProps, GalleryVideoFrameProps } from './types';

import Lightbox from 'yet-another-react-lightbox';
import { memo } from 'react';
import { Zoom, Thumbnails } from 'yet-another-react-lightbox/plugins';
import { Masonry } from 'react-plock';
import { createClassList } from '../../../utils';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import css from './Gallery.module.scss';

import { Button, Flex, Text, Image, Spinner } from '../';

import { FaExclamationCircle as ErrorIcon } from 'react-icons/fa';

import useGallery from '../../../hooks/useGallery';

export default function Gallery() {
    const {
        galleryData,
        updateGalleryTab,
        activeGalleryCategory,
        loadImages,
        gallerySlides,
        activeGallerySlideIndex,
        setActiveSlideIndex
    } = useGallery();

    const { tvcs } = galleryData;

    return (
        <div className={css['gallery']}>
            <div className={css['gallery-header']}>
                <Lightbox
                    slides={gallerySlides}
                    open={activeGallerySlideIndex >= 0}
                    index={activeGallerySlideIndex}
                    close={() => setActiveSlideIndex(-1)}
                    plugins={[Zoom, Thumbnails]}
                />
                {Object.entries(galleryData).map(([category, { title }], idx) => (
                    <Button
                        key={idx}
                        variant="secondary"
                        size="lg"
                        title={title}
                        data-is-active={category === activeGalleryCategory}
                        id={category}
                        onClick={updateGalleryTab}
                    >
                        {title}
                    </Button>
                ))}
            </div>
            <div className={css['gallery-tabs']}>
                {/** Load videos separately to avoid re-render upon category change */}
                <GalleryTab isActive={activeGalleryCategory === 'tvcs'}>
                    <GalleryTabData
                        type="videos"
                        data={tvcs}
                    />
                </GalleryTab>
                {Object.entries(galleryData).map(([category, data], idx) => category !== 'tvcs' ? (
                    <GalleryTab key={idx} isActive={category === activeGalleryCategory}>
                        <GalleryTabData
                            type="images"
                            loadImages={loadImages}
                            category={data.title}
                            setActiveSlideIndex={setActiveSlideIndex}
                            data={data}
                        />
                    </GalleryTab>
                ) : null)}
            </div>
        </div>
    );
}

const GalleryTab = ({ isActive, children }: GalleryTabProps) => {
    const tabClasses = createClassList({
        [css['gallery-tabs-inner']]: true,
        [css['gallery-tabs-inner-active']]: isActive
    });

    return (
        <div className={tabClasses}>
            {children}
        </div>
    )
};

const GalleryTabData = ({ type, category, loadImages, setActiveSlideIndex, data }: GalleryTabDataProps) => {
    const { data: galleryData, isDataLoading, hasError } = data;

    if (isDataLoading) {
        return (
            <Flex justify="center" className="my-3">
                <Spinner />
            </Flex>
        );
    }

    if (hasError) {
        return (
            <Text element="div" color="grey-500" className="p-1 m-1">
                <Flex align="center" justify="center">
                    <ErrorIcon size={32} />
                    <Text className="ml-1" weight="bold">
                        Sorry, there is nothing to show.
                    </Text>
                </Flex>
            </Text>
        )
    }

    if (type === 'videos') {
        return Object.entries(galleryData as Dictionary<string[]>).map(([category, links], galleryDataIndex) => (
            <Flex key={galleryDataIndex} dir="column" className="mb-2">
                <Text element="h3" className="p-1" size="lg" color="grey-100" weight="light">{category}</Text>
                <div className={css['gallery-grid']}>
                    {links.map((src, linkIndex) => (
                        <GalleryVideoframe
                            key={linkIndex}
                            src={src}
                        />
                    ))}
                </div>
            </Flex>
        ));
    }

    return (
        <Masonry
            items={galleryData as GalleryImages[]}
            className="pt-2"
            config={{
                columns: [2, 2, 3],
                gap: [8, 8, 8],
                media: [640, 980, 1080]
            }}
            render={({ src, id }) => (
                <Image
                    key={id}
                    onClick={() => setActiveSlideIndex && setActiveSlideIndex(+id)}
                    data-src={src}
                    src="/images/placeholder.png"
                    title={`${category} photography #${+id + 1} - Click to view`}
                    ref={loadImages}
                    loading="lazy"
                    zoominate
                    referrerPolicy="no-referrer"
                />
            )}
        />
    );
};

const GalleryVideoframe = memo(({ src }: GalleryVideoFrameProps) => (
    <div className={css['gallery-grid-item']}>
        <iframe
            src={src}
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
    </div>
));