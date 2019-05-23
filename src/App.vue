<template>
  <div id="app" class="project-body">

    <div class="header clearfix">
      <div class="logo" @click="goHome">
        <!-- <img src="./static/images/logo.jpg" alt=""> -->
        <a href="#">
          <img src="./images/boluo.jpg" alt="">
        </a>
      </div>
      <div class="nav" style="float:left;line-height:70px;">
        <ul>
          <li :class="{'active':item.Id === currentMenuId , 'menu-item':true}" v-for="(item, index) in menuData" :key="index" @click="menuClick(item)">
            <span :class="{'active':item.Id === currentMenuId}">{{item.Name}}</span>
          </li>
        </ul>
      </div>
      <div class="signUp">
        <el-button type="text" size="mini" @click="signUp">注册</el-button>
      </div>
    </div>

    <div class="main">
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>

    <div class="footer">
      <div class="navLink">
        <span>友情链接：</span>
        <span>http://www.baidu.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menuData: [
        { Name: '首页', Id: '01' },
        { Name: '简介', Id: '02' },
        { Name: '特色', Id: '03' },
        { Name: '课程', Id: '04' },
        { Name: '学生活动', Id: '05' },
      ],
      currentMenuId: ''
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },

    signUp () {
      this.$router.push('/login')
    },

    goHome () {
      this.$router.push('/')
    },

    menuClick (item) {
      this.currentMenuId = item.Id

    }
  },
  created () {
  }
};
</script>

<style lang="less">
.project-body {
  //   width: 1240px;
  padding-top: 70px;
  padding-bottom: 70px;
  margin: 0 auto;
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
