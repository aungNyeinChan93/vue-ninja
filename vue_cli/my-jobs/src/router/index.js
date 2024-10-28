import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from "@/views/job/JobsView.vue"
import JobDetailView from '@/views/job/jobDetailView.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import CustomersView from '@/views/customer/CustomersView.vue'
import CustomerDetailView from '@/views/customer/CustomerDetailView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/jobs",
    name:"jobs",
    component:JobsView
  },
  {
    path:"/jobs/:id/:name/:position",
    name:"jobDetail",
    component:JobDetailView,
    props :true
  },
  {
    path:"/customers",
    name:"customers",
    component:CustomersView
  },
  {
    path:"/customers/:id",
    name:"customerDetail",
    component:CustomerDetailView,
    props:true
  },
  // redirect route
  {
    path:"/all-jobs",
    redirect:"/jobs"
  },
  // catchAll(.*) 404 page
  {
    path:"/:catchAll(.*)",
    redirect:"/404-page"
  },
  {
    path:"/404-page",
    name:"404",
    component:NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
