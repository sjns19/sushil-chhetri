import type { Dictionary, GalleryData, GalleryImages } from "../../types.g";

type SetActiveCategoryAction = {
    type: 'SET_ACTIVE_CATEGORY',
    gallerySlides: GalleryImages[],
    activeGalleryCategory: string
};

type SetActiveSlideIndexAction = {
    type: 'SET_ACTIVE_SLIDE_INDEX',
    activeGallerySlideIndex: number
};

type SetGalleryDataAction = {
    type: 'SET_GALLERY_DATA',
    gallerySlides: GalleryImages[],
    activeGalleryCategory: string,
    galleryData: Dictionary<GalleryData>
};

export type Actions = SetActiveCategoryAction | SetActiveSlideIndexAction | SetGalleryDataAction;

export type InitialStates = {
    activeGalleryCategory: string,
    activeGallerySlideIndex: number,
    gallerySlides: GalleryImages[],
    galleryData: Dictionary<GalleryData>
};