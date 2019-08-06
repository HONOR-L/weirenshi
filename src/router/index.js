import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Emp from '@/pages/emp/Emp'
import Salary from '@/pages/salary/Salary'
import Staff from '@/pages/staff/Staff'
import Salarylist from '@/pages/salarylist/Salarylist'
import Info from '@/pages/info/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
		{
			path: '/home',
      name: 'Home',
      component: Home
    },
		{
			path: '/emp',
      name: 'Emp',
      component: Emp
    },
		{
			path: '/salary',
      name: 'Salary',
      component: Salary
    },
		{
			path: '/staff',
      name: 'Staff',
      component: Staff
    },
		{
			path: '/salarylist',
      name: 'Salarylist',
      component: Salarylist
    },
		{
			path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
