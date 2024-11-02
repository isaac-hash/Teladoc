import { createRouter, createWebHistory } from 'vue-router';
import step1 from '../components/step1.vue';
import step2 from '../components/step2.vue';
import step3 from '../components/step3.vue';
import step4 from '../components/step4.vue';
import home from '../components/home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/step1',
      name: 'step1',

      component: step1
    },
    {
      path: '/step2',
      name: 'step2',

      component: step2
    },
    {
      path: '/step3',
      name: 'step3',

      component: step3
    },
    {
      path: '/step4',
      name: 'step4',

      component: step4
    },

  ]
})

export default router
