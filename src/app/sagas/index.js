import { all, fork } from "redux-saga/effects";

// List of all sagas
import { fetchingData } from "./fetchingData";

export default function* rootSaga() {
    yield all([fork(fetchingData)]);
}
