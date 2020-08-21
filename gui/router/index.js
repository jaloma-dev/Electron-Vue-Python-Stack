import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/*',
            name: 'Index',
            component: Index
        }
    ]
})