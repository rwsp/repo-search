import axios from 'axios';
import {RESULTS_PER_PAGE} from "./constants";

const toEndpoint = (value, filter, sort, page) =>{

  const domain = 'https://api.github.com/search/repositories';

  const filterParam = filter.length ? `+language:${filter}` : '';
  const sortParam = `&sort=${sort.urlParam}`;
  const pageParam = `&page=${page}&per_page=${RESULTS_PER_PAGE}`;

  const query = `?q=${value + filterParam}` + sortParam + pageParam;
  const endpoint = domain + query;




  console.log(endpoint);


  return endpoint;

};

const apiSearch = async (value, filter, sort, page) => {
  return axios.get(toEndpoint(value, filter, sort, page))
    .then(result => ({success: true, data: result.data}))
    .catch(() => ({success: false, data: null}))
};

export default apiSearch;