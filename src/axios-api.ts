import axios from 'axios';

const AxiosApi = axios.create({
  baseURL: 'http://api.tvmaze.com'
});

export default AxiosApi;