import axios from 'axios';

const toEndpoint = (value, filter, sort) =>{

  const domain = 'https://api.github.com/search/repositories';

  const filterParam = filter.length ? `+language:${filter}` : '';
  const sortParam = `&sort=${sort.urlParam}`;
  const query = `?q=${value + filterParam}` + sortParam;

  const endpoint = domain + query;




  console.log(endpoint);


  return endpoint;

};

const apiSearch = async (value, filter, sort) => {
  return axios.get(toEndpoint(value, filter, sort))
    .then(result => ({success: true, data: result.data}))
    .catch(() => ({success: false, data: null}))
};

export default apiSearch;