import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomePage from '@/components/HomePage';
import NfrttLogo from '@/components/NfrttLogo';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/logo',
      name: 'NfrttLogo',
      component: NfrttLogo,
    },
  ],
});
