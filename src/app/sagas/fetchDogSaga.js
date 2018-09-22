import { call, put } from "redux-saga/effects";
import axios from "axios";

import { fetchedData, fetchDataError } from "../actions";

function fetch() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random/12"
    });
}

export function* fetchDogPictures() {
    try {
        const response = yield call(fetch);
        const dog = response.data.message;

        yield put(fetchedData(dog));
    } catch (error) {
        yield put(fetchDataError());
    }
}
