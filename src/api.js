import axios from 'axios';

const apiSearch = async value => {
  return axios.get(`https://api.github.com/search/repositories?q=${value}`)
    .then(result => ({success: true, data: result.data}))
    .catch(() => ({success: false, data: null}))
};

export default apiSearch;