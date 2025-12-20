import type { Actions, InitialStates } from './types';

export const AJAX_ACTION_TYPES = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    DONE: 'done'
} as const;

export const initialStates: InitialStates = {
    data: {},
    loading: true,
    error: false
};

export const ajaxReducer = (state: InitialStates, action: Actions): InitialStates => {
    const actions = {
        [AJAX_ACTION_TYPES.SUCCESS]: {
            ...state,
            data: action.data,
            loading: false
        },
        [AJAX_ACTION_TYPES.FAILURE]: {
            ...state,
            loading: false,
            error: true
        },
        [AJAX_ACTION_TYPES.DONE]: {
            ...state,
            loading: false
        }
    };
    return actions[action.type as keyof typeof actions] || state;
}