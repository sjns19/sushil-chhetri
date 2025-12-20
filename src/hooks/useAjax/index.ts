import type { ApiResponse } from '../../types.g';
import type { AxiosRequestConfig } from 'axios';

import { useEffect, useReducer } from 'react';
import { initialStates, ajaxReducer, AJAX_ACTION_TYPES } from './reducer';
import { ajax } from '../../utils';

export default function useAjax<T>(url: string, config: AxiosRequestConfig = {}) {
    const [state, dispatch] = useReducer(ajaxReducer, initialStates);

    useEffect(() => {
        (async () => {
            const { data, error, status } = await ajax<ApiResponse<T>>(url, config);
            dispatch({
                type: error || status !== 200 ? AJAX_ACTION_TYPES.FAILURE : AJAX_ACTION_TYPES.SUCCESS,
                data
            });
        })();
    }, [url]);

    return {
        ...state,
        data: state.data as T
    };
};