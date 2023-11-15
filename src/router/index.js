import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/firstTest',
    component: layout,
    children:[
      {
        path:'/firstTest',
        name:'firstTest',
        component:()=>import('@/views/firstTest'),
        meta: { title:false,index:0 }
      },
    ]
  },
  {
    path: '/firstTest',
    component: layout,
    children:[
      {
        path:'/firstTest',
        name:'firstTest',
        component:()=>import('@/views/firstTest'),
        meta: { title:'第一题Promise', index:1}
      },
    ]
  },
  {
    path: '/secondTest',
    component: layout,
    children:[
      {
        path:'/secondTest',
        name:'secondTest',
        component:()=>import('@/views/secondTest'),
        meta: { title:'第二题VerticalCenter',index:2}
      },
    ]
  },
  {
    path: '/thirdTest',
    component: layout,
    children:[
      {
        path:'/thirdTest',
        name:'thirdTest',
        component:()=>import('@/views/thirdTest'),
        meta: { title:'第三题MixHeight',index:3}
      },
    ]
  },
  {
    path: '/fourthTest',
    component: layout,
    children:[
      {
        path:'/fourthTest',
        name:'fourthTest',
        component:()=>import('@/views/fourthTest'),
        meta: { title:'第四题Articlesteps',index:4 }
      },
    ]
  },
  {
    path: '/fifthTest',
    component: layout,
    children:[
      {
        path:'/fifthTest',
        name:'fifthTest',
        component:()=>import('@/views/fifthTest'),
        meta: { title:'第五题Password',index:5 }
      },
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
