import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
    {
        path: '/',
        name: 'Index',
        component: resolve => require(['@/views/Index'], resolve)
    },
    {
        path: '/Hello',
        name: 'Hello',
        component: resolve => require(['@/views/Hello'], resolve)
    },
    {
        path: '/Input',
        name: 'Input',
        component: resolve => require(['@/views/Input'], resolve)
    }
]

const router = new Router({
    routes
})

export default router
