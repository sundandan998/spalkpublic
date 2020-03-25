<template>
  <div class="modify backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 修改手机号</span>
      </router-link>
    </div>
    <div class="modify-tel">
      <mt-field label="+86" placeholder="请输入手机号" type="tel" @blur.native.capture="sendCode" :state="CodeStatus">
      </mt-field>
      <!-- <mt-field label="+86" class="tel-input" @blur.native.capture="sendCode" :state="CodeStatus" placeholder="请输入手机号"
        v-model="tel.mobile"></mt-field> -->
    </div>
    <div class="modify-code">
      <mt-field label="验证码" placeholder="请输入验证码" type="tel">
        <span v-on:click="sendSmsCode" v-model="btnCode.btnContent" class="send-code">发送验证码</span>
      </mt-field>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'SafetyCenter'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'PersonCenter'}">
        <div class="right-btn fr">
          <van-button type="info">提交</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  // 接口请求
  import api from '@/api/user/User.js'
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        disabled: true,
        CodeStatus: '',
        tel: {
          mobile: '',
          code: ''
        },
        // 发送验证码
        btnCode: {
          btnContent: '发送',
          mobile: ''
        },
      }
    },
    created() {
      document.title = '斯帕尔克'

    },
    methods: {
      // 提交
      submit() {
        api.replacePhone(this.tel).then(res => {
          if (res.code == 0) {
            Toast({
              message: res.msg,
              position: 'top',
              className: 'zZindex'
            })
            let userInfo = localStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)
            userInfo.data.mobile = this.tel.mobile
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            this.$router.push({
              name: 'SafetyCenter'
            })
          }
        }).catch(err => {
          if (err.code !== 0) {
            Toast({
              message: err.msg,
              position: 'top',
              className: 'zZindex'
            })
          }
        })
      },
      // 手机号校验
      sendCode() {
        var tel = /^[\+]?\d+(\.\d+)?$/
        if (!tel.test(this.tel.mobile)) {
          this.CodeStatus = 'error'
          this.errTitle = '请输入有效的手机号码'
        } else {
          this.CodeStatus = 'success'
        }
      },
      // 发送验证码
      sendSmsCode() {
        this.time = 60
        this.timer()
        api.sendCode({ mobile: this.tel.mobile }).then(res => {
          if (res.code === 0) {
            Toast({
              message: res.msg,
              position: 'top',
              className: 'zZindex'
            })
          }
        }).catch(err => {
          if (err.code !== 0) {
            Toast({
              message: err.msg,
              position: 'top',
              className: 'zZindex'
            })
          }
        })
      },
      // 60s倒计时
      timer() {
        if (this.time > 0) {
          this.time--
          this.btnCode.btnContent = this.time + 's'
          var timer = setTimeout(this.timer, 1000)
        } else if (this.time === 0) {
          this.btnCode.btnContent = '发送'
          clearTimeout(timer)
        }
      },
    },
    watch: {
      tel: {
        immediate: true,
        deep: true,
        handler(val) {
          if (val.mobile && val.code !== '') {
            this.disabled = false
          } else {
            this.disabled = true
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .modify {
    .modify-tel {
      margin: 50px 20px 10px 20px;
    }

    .modify-code {
      margin: 10px 20px 10px 20px;
      .send-code{
        border: 1px solid #4DABF0;
        font-size:24px;
        padding:10px;
        border-radius:10px;
        color:#4DABF0;
      }
    }
  }
</style>