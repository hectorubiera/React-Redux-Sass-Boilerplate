import * as types from "../constants/actionTypes";

const initialState = {
    fetching: false,
    dogs: null,
    error: null
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
    case types.API_CALL_REQUEST :
        return { ...state, fetching: true, error: null, dogs: null };
    case types.API_CALL_SUCCESS :
        return { ...state, fetching: false, dogs: action.dogs };
    case types.API_CALL_FAILURE :
        return {
            ...state,
            fetching: false,
            dogs: null,
            error: action.error
        };
    default :
        return state;
    }
}
