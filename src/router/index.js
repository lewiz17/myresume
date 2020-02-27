import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Theme2 from '@/components/ResumeTheme2';
import Theme3 from '@/components/ResumeTheme3';
import Theme21 from '@/components/ResumeTheme21';
import Theme24 from '@/components/ResumeTheme24';
import Theme13 from '@/components/ResumeTheme13';
import Theme27 from '@/components/ResumeTheme27';
import Theme19 from '@/components/ResumeTheme19';

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
  },
  {
    path: '/theme13',
    name: 'Theme13',
    component: Theme13,
    props: true
  },
  {
    path: '/theme27',
    name: 'Theme27',
    component: Theme27,
    props: true
  },
  {
    path: '/theme19',
    name: 'Theme19',
    component: Theme19,
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router
