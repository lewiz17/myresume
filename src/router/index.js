import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Theme2 from '@/components/ResumeTheme2';
import Theme3 from '@/components/ResumeTheme3';

const routes = [
  {
    path: '/',
    name: 'Theme2',
    component: Theme2,
    props: true
  },
  {
    path: '/theme3',
    name: 'Theme3',
    component: Theme3,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
