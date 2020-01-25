import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Theme2 from '@/components/ResumeTheme2';
import Theme3 from '@/components/ResumeTheme3';
import Theme21 from '@/components/ResumeTheme21';
import Theme24 from '@/components/ResumeTheme24';

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
  },
  {
    path: '/theme21',
    name: 'Theme21',
    component: Theme21,
    props: true
  },
  {
    path: '/theme24',
    name: 'Theme24',
    component: Theme24,
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
