import apiSearch from "../api";
import {handleSpaces} from "../module";
import {RESULTS_PER_PAGE, sorts} from "../constants";

const SEARCH_SUBMITTED = 'SEARCH_SUBMITTED';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAILURE = 'SEARCH_FAILURE';
const SET_FILTER = 'SET_FILTER';
const SET_SORT = 'SET_SORT';

const initialResults = {
  numberOfPages: null,
  currentPage: null,
  items: [],
};

const defaultState = {
  loading: false,
  error: false,
  results: initialResults,
  filter: '',
  sort: sorts.BEST_MATCH,
  lastSearchValue: '',
};

export const setFilter = filter => dispatch => dispatch({type: SET_FILTER, data: filter});

export const setSort = sort => dispatch => dispatch({type: SET_SORT, data: sort});

export const submitSearch = (value, page = 1) => async (dispatch, getState) => {
  dispatch({type: SEARCH_SUBMITTED, data: value});

  const { filter, sort, results } = getState();

  const normalize = _result => ({
    numberOfPages: Math.floor( _result.data.total_count / RESULTS_PER_PAGE),
    currentPage: page,
    items: _result.data.items,
  });

  const searchResult =
    await apiSearch(handleSpaces(value), handleSpaces(filter), sort, page);

  console.log('search result');
  console.log(searchResult);

  dispatch({
      type: searchResult.success ? SEARCH_SUCCESS : SEARCH_FAILURE,
      data: searchResult.success ? normalize(searchResult) : results,
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
        lastSearchValue: action.data,
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