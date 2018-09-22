import * as types from "../constants/actionTypes";

// Returns an action type, SELECTED_IMAGE and the image selected
export const fetchingData = () => ({
    type: types.API_CALL_REQUEST
});

// Returns an action type, SELECTED_VIDEO and the video selected
export const fetchedData = dogs => ({
    type: types.API_CALL_SUCCESS,
    dogs
});

// Returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
export const fetchDataError = () => ({
    type: types.API_CALL_FAILURE
});
