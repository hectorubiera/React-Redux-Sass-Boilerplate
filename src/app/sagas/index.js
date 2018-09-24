import { all, fork } from "redux-saga/effects";

// List of all sagas
import { apiCallRequest } from "./apiCallRequest";

export default function* rootSaga() {
    yield all([fork(apiCallRequest)]);
}
