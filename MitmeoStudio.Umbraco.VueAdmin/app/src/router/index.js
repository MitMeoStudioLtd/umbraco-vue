import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: require('@/components/sections/_dashboard_').default,
    },
    {
      path: '/content',
      name: 'content',
      component: require('@/components/sections/content').default,
    },
    {
      path: '/media',
      name: 'media',
      component: require('@/components/sections/media').default,
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/sections/settings').default,
    },
    {
      path: '/developer',
      name: 'developer',
      component: require('@/components/sections/developer').default,
    },
    {
      path: '/users',
      name: 'users',
      component: require('@/components/sections/users').default,
    },
    {
      path: '/member',
      name: 'members',
      component: require('@/components/sections/members').default,
    },
    {
      path: '/forms',
      name: 'forms',
      component: require('@/components/sections/forms').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
