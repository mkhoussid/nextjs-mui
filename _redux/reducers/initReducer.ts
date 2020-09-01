import { AnyAction } from 'redux';

export const REDUCER_INIT = 'initReducer';

export interface IInitState {
    loading: boolean;
}

const initialState = {
    loading: false,
};

const initReducer = (state: IInitState = initialState, action: AnyAction) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: payload,
            };
        default:
            return state;
    }
};

export default initReducer;
