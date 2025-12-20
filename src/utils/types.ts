import type { AxiosResponse } from 'axios';
import type { Dictionary } from '../types.g';

export type CreateClassListPropss = Dictionary<(string | boolean | number | undefined)>;

export interface AjaxResponse<T> extends Partial<AxiosResponse<T>> {
	error?: string
}

export type AjaxError = {
	message: string
};