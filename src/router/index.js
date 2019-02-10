import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/blog/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
