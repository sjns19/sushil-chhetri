export type Actions = {
    type: string,
    data?: unknown,
    error?: boolean
};

export type InitialStates = {
    data: unknown,
    loading: boolean,
    error: boolean
};