import axios from 'axios';

function interceptors() {
  // 请求拦截
  axios.interceptors.request.use((req) => {
    // request container
    console.log(req);
    return req;
  }, err => Promise.reject(err));

  // 响应拦截
  axios.interceptors.response.use((res) => {
    // response container
    console.log(res);
    if (res.status === 404) {
      // 404
    }
    return res;
  }, err => Promise.reject(err));
}

export default interceptors;
