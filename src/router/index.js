import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import bar from '@/components/bar'
import bar1 from '@/components/bar1'
import pie from '@/components/pie'
import pieG from '@/components/pieG'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    },
    {
      path: '/bar1',
      name: 'bar1',
      component: bar1
    },
    {
      path: '/pie',
      name: 'pie',
      component: pie
    },
    {
      path: '/pieG',
      name: 'pieG',
      component: pieG
    }
  ]
})
