import { combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import modals from "../slices/modals";
import user from "../slices/user";
interface RootState {
  modals: ReturnType<typeof modals>;
  user: ReturnType<typeof user>;
}

const reducers: ReducersMapObject<RootState> = {
  modals: modals,
  user: user,
};

const combinedReducer: Reducer<RootState> = combineReducers(reducers);

export default combinedReducer;
