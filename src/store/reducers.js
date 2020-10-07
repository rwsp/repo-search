import apiSearch from "../api";
import {handleSpaces} from "./module";
import {sorts} from "../constants";

const SEARCH_SUBMITTED = 'SEARCH_SUBMITTED';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAILURE = 'SEARCH_FAILURE';
const SET_FILTER = 'SET_FILTER';
const SET_SORT = 'SET_SORT';

const initialResults = {
  numberOfPages: null,
  currentPage: null,
  items: null,
};

const defaultState = {
  loading: false,
  error: false,
  results: initialResults,
  filter: '',
  sort: sorts.BEST_MATCH,
};

export const setFilter = filter => dispatch => dispatch({type: SET_FILTER, data: filter});

export const setSort = sort => dispatch => dispatch({type: SET_SORT, data: sort});

export const submitSearch = value => async (dispatch, getState) => {
  dispatch({type: SEARCH_SUBMITTED, data: null});

  const { filter, sort } = getState();

  const normalize = _result => ({
    numberOfPages: -1,
    currentPage: -2,
    items: _result.data.items,
  });

  const searchResult =
    await apiSearch(handleSpaces(value), handleSpaces(filter), sort);

  dispatch({
      type: searchResult.success ? SEARCH_SUCCESS : SEARCH_FAILURE,
      data: normalize(searchResult),
  });
};

export const defaultReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SEARCH_SUBMITTED:
      return {
        ...state,
        loading: true,
        error: false,
        results: initialResults,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        results: action.data,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        results: initialResults,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.data,
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.data,
      };
    default:
      return state;
  }
};