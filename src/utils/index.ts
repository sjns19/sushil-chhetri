import type {
	CreateClassListPropss,
	AjaxResponse,
	AjaxError
} from './types';

import axios, {
	type AxiosRequestConfig,
	type AxiosError
} from 'axios';

export const createClassList = (classes: CreateClassListPropss): string | undefined => {
	const classList = Object
		.keys(classes)
		.map((key) => (key !== 'undefined' && classes[key]) ? key : null)
		.join(' ')
		.trim();

	return classList.length ? classList : undefined;
};

export const ajax = async <T>(
	url: string | AxiosRequestConfig = {},
	config: AxiosRequestConfig = {}
): Promise<AjaxResponse<T>> => {
	try {
		if (typeof url !== 'object')
			return await axios<T>(url, config);
		return await axios<T>(url);
	} catch (err) {
		const { response } = err as AxiosError<AjaxError>;
		const msg = response?.data.message;
		return {
			error: msg ?? 'There was a problem trying to process your request'
		};
	}
};

export const ucfirst = (str: string) => str
	.charAt(0)
	.toUpperCase() + str.slice(1);