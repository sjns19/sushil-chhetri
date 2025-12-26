import type { GalleryImages, GalleryData, Dictionary } from '../../types.g';

import { useEffect, useReducer } from 'react';
import { ajax } from '../../utils';

import { initialStates, galleryReducer, GALLERY_ACTIONS } from './reducer';

export default function useGallery() {
    const [state, dispatch] = useReducer(galleryReducer, initialStates);

    useEffect(() => {
        fetchGalleryData('macro');
    }, []);

    const updateGalleryTab = (e: React.MouseEvent<HTMLButtonElement>) => {
        const
            btn = e.currentTarget,
            category = btn.id,
            { galleryData } = state;

        if (category === state.activeGalleryCategory)
            return;

        const currentData = galleryData[category as keyof typeof galleryData].data;

        if (currentData?.length && typeof currentData !== 'object') {
            return dispatch({
                type: GALLERY_ACTIONS.SET_ACTIVE_CATEGORY,
                gallerySlides: currentData,
                activeGalleryCategory: category
            });
        }

        fetchGalleryData(category);
    };

    const fetchGalleryData = async (category?: string) => {
        const { galleryData } = state;

        if (!galleryData || !category)
            return;

        const
            endpointBase = import.meta.env.DEV ? '/' : '/sushil-chhetri/',
            { data, error, status } = await ajax<GalleryImages[] & Dictionary<string[]>>(endpointBase + 'data/' + category.toLowerCase() + '.json');

        dispatch({
            type: GALLERY_ACTIONS.SET_GALLERY_DATA,
            activeGalleryCategory: category,
            gallerySlides: data as GalleryImages[],
            galleryData: {
                [category]: {
                    ...galleryData[category as keyof typeof galleryData],
                    isDataLoading: false,
                    hasError: typeof data !== 'object' || error || status !== 200,
                    data
                }
            } as Dictionary<GalleryData>
        });
    }

    const loadImages = (elem: HTMLImageElement) => {
        if (!elem)
            return;

        const src = elem.getAttribute('data-src');

        if (src)
            elem.src = src;
    }

    const setActiveSlideIndex = (index: number) => {
        dispatch({
            type: GALLERY_ACTIONS.SET_ACTIVE_SLIDE_INDEX,
            activeGallerySlideIndex: index
        });
    }

    return {
        ...state,
        updateGalleryTab,
        loadImages,
        setActiveSlideIndex
    };
}