import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import Vuex from 'vuex'


Vue.use(Vuex)
import 'es6-promise/auto'

import App from './App.vue'

// 引入elementUI
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

// 引入v-router
Vue.use(VueRouter)


import Login from './components/login.vue'
import Index from './components/index.vue'

import "./static/css/common.css"

let routes = [{
        path: '/login',
        component: Login
    },
    {
        path: '/index',
        component: Index
    },
]

let router = new VueRouter({
    routes
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')