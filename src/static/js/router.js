let routers = [
  {// 首页
    path: '/index',
    name: 'index',
    component: function (resolve) {
      require(['@/pages/home/index.vue'], resolve)
    }
  }
]
export default routers;