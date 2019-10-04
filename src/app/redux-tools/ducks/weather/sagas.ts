import { put, all, call, takeLatest, fork } from "redux-saga/effects";
import { IReducerAction } from "..";
import { WeatherActionTypes, ApiResponse, ILocation } from "./types";
import { fetchWeatherSuccess, fetchWeatherError } from "./actions";
import API from "../../../services/api.service";

function* fetchWeather(action: IReducerAction<ILocation>): Generator {
  try {
    const { latitude, longitude } = action.payload;
    const response: ApiResponse | any = yield call(
      API.get,
      `weather?lat=${latitude}&lon=${longitude}&units=metric`
    );

    yield put(fetchWeatherSuccess(response));
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchWeatherError(err.stack!));
    } else {
      yield put(fetchWeatherError("An unknown error occured."));
    }
  }
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */

function* watchFetchRequest(): Generator {
  yield takeLatest(WeatherActionTypes.FETCH_WEATHER, fetchWeather);
}

/**
 * @desc saga init, forks in effects, other sagas
 */

export function* weatherSaga(): Generator {
  yield all([fork(watchFetchRequest)]);
}
