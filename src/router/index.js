import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('@/pages/home');

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
