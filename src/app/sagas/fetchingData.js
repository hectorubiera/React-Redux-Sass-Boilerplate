import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/actionTypes";

import { fetchDogPictures } from "./fetchDogSaga";

export function* fetchingData() {
    yield takeLatest(types.API_CALL_REQUEST, fetchDogPictures);
}
