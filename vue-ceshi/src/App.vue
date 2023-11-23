<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

//忘记密码提示
const forgetPassword = () => {
  ElMessage({
    message: '请联系微信：5366523255',
    type: 'success',
  })
}

//模式：登录、token、注册
let loginModel = ref('登录')
const switchModel = (model: string) => {
  loginModel.value = model
}

</script>



<template>
  <div v-if="loginModel === '注册'" class="container a-container" id="a-container">
    <form class="form" id="aa-form" method="" action="">
      <h2 class="form_title title">欢迎使用FilHub</h2>
      <div class="form_icons">
        <img class="form_icon" src="" alt="">
        <img class="form_icon" src="" alt="">
        <img class="form_icon" src="" alt="">
      </div>

      <input class="form_input" type="text" placeholder="用户名">
      <input class="form_input" type="password" placeholder="密码">
      <input cclass="form_input" type="text" placeholder="Token">

      <div class="login-info">
        <a class="form_link" @click="forgetPassword">忘记密码</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a class="form_link" @click="switchModel('token')">获取Token教程</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a class="form_link" @click="switchModel('登录')">使用账号登录</a>
      </div>

      <button class="form_button button submit">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</button>
    </form>
  </div>

  <div v-else-if="loginModel === '登录' || loginModel === 'token'" class="container b-container" id="b-container">
    <form class="form" id="b-form" method="" action="">
      <h2 class="form_title title">欢迎登录FilHub</h2>
      <div class="form_icons">
        <img class="form_icon" src="" alt="">
        <img class="form_icon" src="" alt="">
        <img class="form_icon" src="" alt="">
      </div>

      <input v-if="loginModel === '登录'" class="form_input" type="text" placeholder="用户名">
      <input v-if="loginModel === '登录'" class="form_input" type="password" placeholder="密码">
      <input v-if="loginModel === 'token'" class="form_input" type="password" placeholder="Token">

      <div class="login-info">
        <a class="form_link" @click="forgetPassword">忘记密码</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <template v-if="loginModel === '登录'">
          <a class="form_link" @click="switchModel('token')">使用Token登录</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </template>

        <template v-if="loginModel === 'token'">
          <a class="form_link" @click="switchModel('登录')">使用账号登录</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </template>
        <a class="form_link" @click="switchModel('注册')">注册新账号</a>
      </div>

      <button class="form_button button submit">登 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;录</button>
    </form>
  </div>
</template>



<style scoped>
@import '@/style/login.css';

.login-info {
  margin-top: 10px;
}
</style>