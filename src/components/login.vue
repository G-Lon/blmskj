<template>
  <div>
    <div class="login">
      <el-form class="form" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.trim="ruleForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="ruleForm.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="qrCode">
          <el-input v-model.trim="ruleForm.qrCode" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-button type="primary" style="width:80%;margin-left:10%;margin-top:20px;" @click="login('ruleForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        username: "",
        password: "",
        qrCode: "",
      },
      rules: {
        username: [{ required: true, message: '用戶名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        qrCode: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((vaid) => {
        if (vaid) {
          this.$router.push({
            path: '/index'
          })
        } else {
          return false
        }
      })
    },
  }
}
</script>

<style lang="less">
.login {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0px 0px 2px #ccc;
  .form {
    .login-item {
      line-height: 40px;
      margin-bottom: 30px;
      .username,
      .password,
      .qrCode {
        float: left;
        width: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>


