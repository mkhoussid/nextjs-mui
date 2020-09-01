import { State, TGetState } from './reducers/rootReducer';
import { useSelector } from 'react-redux';
import { pick } from 'lodash';

export const getState = (reducer: keyof State, values: Array<TGetState>): any =>
    pick(
        useSelector((state: State) => state[reducer]),
        values,
    );
