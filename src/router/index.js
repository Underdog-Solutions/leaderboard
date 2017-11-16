import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/Rank'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rank',
      component: Rank
    }, {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
