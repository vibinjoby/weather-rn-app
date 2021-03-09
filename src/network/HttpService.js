const axios = require('axios');

axios.interceptors.response.use(null, (error) => {
  if (
    error &&
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500
  ) {
    console.log(error.response.request._response);
  }
  if (
    error &&
    error.response &&
    error.response.request &&
    error.response.request._response
  )
    return Promise.reject(error.response.request._response);

  return Promise.reject(error);
});

const setHeader = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
};

export default {
  setHeader,
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
