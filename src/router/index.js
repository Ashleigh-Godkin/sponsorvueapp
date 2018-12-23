import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Donations from '@/components/Donations'
import Donate from '@/components/Donate'
import About from '@/components/About'
import Contact from '@/components/Contact'
import DonationForm from '@/components/DonationForm'
import Edit from '@/components/Edit'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Map from '@/components/Map'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/donations',
      name: 'Donations',
      component: Donations
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }

  ]
})
