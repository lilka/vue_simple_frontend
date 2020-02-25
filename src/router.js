import Vue from 'vue'
import Router from 'vue-router'
import Users from './components/Users';
import EditForm from './views/EditForm';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'users',
            component: Users
        },
        {
            path: '/users/:id',
            component: EditForm,
            props: true
        },

    ]
})