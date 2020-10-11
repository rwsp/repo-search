import apiSearch from "../api";
import {RESULTS_PER_PAGE, sorts} from "../constants";

/**
 *
 * reducers - default reducer and action providers for app state.
 *
 * middleware: thunk
 *
 */

const SEARCH_SUBMITTED = 'SEARCH_SUBMITTED';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAILURE = 'SEARCH_FAILURE';
const SET_FILTER = 'SET_FILTER';
const SET_SORT = 'SET_SORT';
const TOGGLE_CONTROLS = 'TOGGLE_CONTROLS';

const initialResults = {
  numberOfPages: null,        //number of pages available for given search
  currentPage: null,          //page with app's current items
  items: [],                  //items in current page
};

const defaultState = {
  submitted: false,           //has the app submitted a search
  success: false,             //did the api successfully return a result
  error: false,               //did the api encounter an error during a search
  results: initialResults,    //search results
  filter: '',                 //current app search filters
  sort: sorts.BEST_MATCH,     //current app search sort
  lastSearchValue: '',        //most recent search value submitted to api
  showControls: false,        //should the app display search control component
};

export const toggleControls = showControls =>
  (dispatch) => dispatch({type: TOGGLE_CONTROLS, data: showControls});


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
    await apiSearch(value, filter, sort, page);

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
        submitted: true,
        error: false,
        success: false,
        results: initialResults,
        lastSearchValue: action.data,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        error: false,
        success: true,
        results: action.data,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        success: false,
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
    case TOGGLE_CONTROLS:
      return {
        ...state,
        showControls: action.data,
      };
    default:
      return state;
  }
};