import type { Actions, InitialStates } from './types';

import GalleryInitialStates from '../../static/gallery-initial-states.json';

export const GALLERY_ACTIONS = {
    SET_ACTIVE_CATEGORY: 'SET_ACTIVE_CATEGORY',
    SET_ACTIVE_SLIDE_INDEX: 'SET_ACTIVE_SLIDE_INDEX',
    SET_GALLERY_DATA: 'SET_GALLERY_DATA'
} as const;

export const initialStates: InitialStates = GalleryInitialStates;

export const galleryReducer = (state: InitialStates, action: Actions) => {
    switch (action.type) {
        case GALLERY_ACTIONS.SET_ACTIVE_CATEGORY:
            return {
                ...state,
                gallerySlides: action.gallerySlides,
                activeGalleryCategory: action.activeGalleryCategory
            }

        case GALLERY_ACTIONS.SET_ACTIVE_SLIDE_INDEX:
            return {
                ...state,
                activeGallerySlideIndex: action.activeGallerySlideIndex
            }

        case GALLERY_ACTIONS.SET_GALLERY_DATA:
            return {
                ...state,
                activeGalleryCategory: action.activeGalleryCategory,
                gallerySlides: action.gallerySlides,
                galleryData: {
                    ...state.galleryData,
                    ...action.galleryData
                }
            }

        default:
            return state;
    }
}