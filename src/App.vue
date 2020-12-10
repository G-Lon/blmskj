<template>
  <div id="app" class="project-body">
    <div class="main">
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>

    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        
    };
  },
  methods: {
      
  },
  created () {
    this.$router.push({
      path: '/index',
      query: {
        pageName: 'home',
      }
    })
  }
};
</script>

<style lang="less">
.project-body {
  .main {
    width: 1240px;
    min-height: 700px;
    border-radius: 5px;
    padding: 10px;
    margin: 0 auto;
    // background-color: #f5f5f5;
  }
  .header {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #009933;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    .logo {
      float: left;
      width: 300px;
      height: 50px;
      margin-top: 10px;
      padding-left: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .signUp {
      float: right;
      padding-right: 100px;
    }
  }
  .footer {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #009933;
    text-align: center;
    position: fixed;
    z-index: 20;
    bottom: 0;
    left: 0;
  }

  .menu-item {
    cursor: pointer;
    padding: 0 10px;
    color: #fff;
    &:hover {
      background-color: #006600;
    }
    &.active {
      background-color: #006600;
    }
  }

  span.active {
    color: #fff;
  }

  .el-menu.el-menu--horizontal {
    border: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
    color: green;
  }

  .el-menu-item {
    background-color: transparent !important;
  }
}
</style>
