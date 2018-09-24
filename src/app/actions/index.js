import * as types from "../constants/actionTypes";

// Returns an action type, SELECTED_IMAGE and the image selected
export const apiCallRequest = () => ({
    type: types.API_CALL_REQUEST
});

// Returns an action type, SELECTED_VIDEO and the video selected
export const apiCallSuccess = data => ({
    type: types.API_CALL_SUCCESS,
    data
});

// Returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
export const apiCallError = () => ({
    type: types.API_CALL_FAILURE
});
