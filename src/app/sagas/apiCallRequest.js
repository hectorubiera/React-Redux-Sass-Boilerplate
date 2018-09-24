import { takeLatest } from "redux-saga/effects";
import * as types from "../constants/actionTypes";

import { getApiData } from "./getApiData";

export function* apiCallRequest() {
    yield takeLatest(types.API_CALL_REQUEST, getApiData);
}
