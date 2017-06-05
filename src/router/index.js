import Vue from 'vue'
import Router from 'vue-router'
import List from 'components/List'
import Detail from 'components/Detail'
import Information from 'components/Information'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },{
      path : '/movie/:title',
      name : 'detail',
      component : Detail
    },{
      path : '/information',
      name : 'information',
      component : Information
    },
    {
      path: '*',
      redirect : '/'
    }
  ]
})
