import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import modals from '../slices/modals';
interface RootState {
  modals: ReturnType<typeof modals>;
}

const reducers: ReducersMapObject<RootState> = {
  modals: modals,
};

const combinedReducer: Reducer<RootState> = combineReducers(reducers);

export default combinedReducer;
