import { combineReducers } from 'redux';

import initReducer, { IInitState } from './initReducer';

export type TGetState = keyof IInitState;

export interface State {
    initReducer: IInitState;
}

export const rootReducer = combineReducers<State>({
    initReducer,
});
