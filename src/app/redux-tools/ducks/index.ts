import { Action, combineReducers } from "redux";
import { PayloadAction, TypeConstant } from "typesafe-actions";
import { all, fork } from "redux-saga/effects";
import { IWeatherState, weatherReducer, weatherSaga } from "./weather";

export type IApplicationState = {
  weather: IWeatherState;
};

export type IReducerAction<TPayload> = Action<TypeConstant> &
  PayloadAction<TypeConstant, TPayload>;

export const rootReducer = combineReducers<IApplicationState>({
  weather: weatherReducer
});

export function* rootSaga(): Generator {
  yield all([fork(weatherSaga)]);
}
