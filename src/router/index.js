import Vue from 'vue'
import Router from 'vue-router'
import EmailIndex from '@/components/EmailIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'EmailIndex',
        component: EmailIndex
    }
  ]
})