/** Global types that are needed in multiple places */

export type ReactChildren = {
	children: React.ReactNode
};

export type Dictionary<T> = {
	[key: string]: T
};

export type GalleryData = {
	title: string,
	isDataLoading: boolean,
	hasError: boolean,
	data: GalleryImages[] & Dictionary<string[]> | null
}

export type GalleryImages = {
	id: string,
	url: string,
	title: string,
	name: string,
	labels: string[],
	src: string
}

// API response with data
export type ApiResponse<T> = T & {
	message: string,
	status: number
}