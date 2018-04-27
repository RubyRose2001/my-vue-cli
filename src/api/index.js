import http from './http';

const baiduSeach = params => http.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', params);
const home = params => http.get('/home', params);


export {
  baiduSeach,
  home,
};
