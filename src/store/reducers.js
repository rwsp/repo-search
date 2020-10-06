import apiSearch from "../api";

const SEARCH_SUBMITTED = 'SEARCH_SUBMITTED';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAILURE = 'SEARCH_FAILURE';

const defaultState = {
  loading: false,
  error: false,
  data: null,
};

export const submitSearch = value => async dispatch => {
  dispatch({type: SEARCH_SUBMITTED, data: null});

  const searchResult = await apiSearch(value);

  dispatch({
      type: searchResult.success ? SEARCH_SUCCESS : SEARCH_FAILURE,
      data: searchResult.data,
  });
};

export const defaultReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SEARCH_SUBMITTED:
      return {
        loading: true,
        data: null,
        error: false,
      };
    case SEARCH_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: false,
      };
    case SEARCH_FAILURE:
      return {
        loading: false,
        data: null,
        error: true,
      };
    default:
      return state;
  }
};