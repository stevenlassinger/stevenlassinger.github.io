import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Resume from '@/views/Resume'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Steve Lassinger' } 

    },
    {
      path: '/Resume',
      name: 'Resume',
      component: Resume,
      meta: { title: 'Resume' } 

    }
  ]
})