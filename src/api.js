import axios from 'axios';
import {RESULTS_PER_PAGE} from "./constants";

//this will replace any whitespace with a single '+' to facilitate URL params
const cleanse = str => str
  .replace(/\s+/g,'%20')
  .replace(/#+/g,'%23')
  .replace(/\+/g,'%2B');

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

const apiSearch = async (value, filter, sort, page) => {
  return axios.get(toEndpoint(value, filter, sort, page))
    .then(result => ({success: true, data: result.data}))
    .catch(() => ({success: false, data: null}))
};

export default apiSearch;