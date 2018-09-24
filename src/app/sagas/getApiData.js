import { call, put } from "redux-saga/effects";
import axios from "axios";

import { apiCallSuccess, apiCallError } from "../actions";

function fetchData() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random/12"
    });
}

export function* getApiData() {
    try {
        const response = yield call(fetchData);
        const data = response.data.message;

        yield put(apiCallSuccess(data));
    } catch (error) {
        yield put(apiCallError());
    }
}
