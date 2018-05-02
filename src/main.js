// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import plugins from './plugins';
import loadScript from './plugins/loadScript';
import './mock';

Vue.config.productionTip = false;
Vue.use(plugins);
const id = 'first';
Vue.component('first', (resolve, reject) => {
  console.log(loadScript);
  loadScript('http://localhost:8080/chunks/Home-7125f7e5.js').then(() => {
    resolve(id);
  }).catch(() => {
    reject();
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
