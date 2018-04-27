import interceptors from '@/api/httpInterceptors';
import axios from 'axios';

interceptors();
const httpGet = (url, params) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(url, { params }).then((res) => {
      res.data = res.data || {};
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
  return promise;
};
const httpPost = (url, params) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(url, params).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
  return promise;
};
export default {
  'post': httpPost,
  'get': httpGet,
};
