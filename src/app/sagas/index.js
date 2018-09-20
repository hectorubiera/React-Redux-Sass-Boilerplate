import { all } from "redux-saga/effects";

// List of all sagas
import * as helloSaga from "./helloSaga";

export default function* rootSaga() {
    yield all([
        helloSaga
    ]);
}
