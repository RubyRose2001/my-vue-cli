import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
const Home = r => require.ensure([], () => r(require('@/pages/home')), 'Home');
// const First = r => require.ensure([], () => r(require('@/pages/first')), 'First');
// const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home');
// const First = () => import(/* webpackChunkName: "first" */ '@/pages/first');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
    },
    // {
    //   path: '/first',
    //   name: 'first',
    //   component: First,
    //   meta: {
    //     title: '另一页',
    //   },
    // },
  ],
});

// 路由拦截
router.beforeEach((to, from, next) => {
  const { title } = to.meta;
  if (title) {
    document.title = title;
  }
  next();
});
export default router;
