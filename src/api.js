import axios from 'axios';
import {RESULTS_PER_PAGE} from "./constants";

/**
 *
 * cleanse - replaces any problematic characters with their appropriate URL parameter equivalents
 *
 */
const cleanse = str => str
  .replace(/\s+/g,'%20')                            //white space
  .replace(/#+/g,'%23')      //'#' sign
  .replace(/\+/g,'%2B');     //'+' sign

/**
 *
 * toEndpoint - generates endpoint url string
 *
 */
const toEndpoint = (_value, _filter, sort, page) =>{
  const value = cleanse(_value);
  const filter = cleanse(_filter);

  const domain = 'https://api.github.com/search/repositories';

  const filterParam = filter.length ? `+language:${filter}` : '';
  const sortParam = `&sort=${sort.urlParam}`;
  const pageParam = `&page=${page}&per_page=${RESULTS_PER_PAGE}`;

  const query = `?q=${value + filterParam}` + sortParam + pageParam;

  return domain + query;

};

/**
 *
 * apiSearch - asynchronous method to facilitate api 'GET'
 *
 */
const apiSearch = async (value, filter, sort, page) => {
  return axios.get(toEndpoint(value, filter, sort, page))
    .then(result => ({success: true, data: result.data}))
    .catch(() => ({success: false, data: null}))
};

export default apiSearch;