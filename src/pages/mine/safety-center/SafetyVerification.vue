<template>
  <div class="safety-verification">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'SafetyCenter'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 安全验证</span>
      </router-link>
    </div>
    <div class="safety-verification-tel">
      <mt-cell title="手机号" value="166515"></mt-cell>
    </div>
    <div class="safety-verification-code">
      <mt-field placeholder="请输入验证码" type="number" v-model="verification.code">
        <input class="send-input" v-on:click="sendSmsCode" readonly="readonly" v-model="btnCode.btnContent" />
      </mt-field>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'SafetyCenter'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <div class="right-btn fr" @click="submit">
        <van-button type="info"> 提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '@/api/user/User.js'
  import { Toast } from 'mint-ui'
  // import { sendCode } from '@/assets/js/common.js'
  export default {
    data() {
      return {
        infor: {},
        dataList: [],
        disabled: true,
        // 提交参数
        verification: {
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
      document.title = '安全验证'
      this.information()
    },
    methods: {
      // 个人信息
      information() {
        api.information().then(res => {
          this.infor = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      // 提交
      submit(){
        if(this.$route.params.click=='set'){
          this.$router.push({
            name:'SetPwd'
          })
        }else if(this.$route.params.click=='modify'){
          this.$router.push({
            name:'ModifyPwd'
          })
        }
      },

      // 发送验证码
      sendSmsCode() {
        // debugger
        this.time = 60
        this.timer()
        // var userInfo = sessionStorage.getItem('userInfo')
        var userInfo = localStorage.getItem('userInfo')
        userInfo = JSON.parse(userInfo)
        api.sendCode({ mobile: userInfo.data.mobile }).then(res => {
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
      verification: {
        immediate: true,
        deep: true,
        handler(val) {
          if (val.code != '') {
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

  .safety-verification {

    .safety-verification-code {
      .send-input {
        border: 1px solid #4DABF0;
        float: right;
        color: #4DABF0;
        padding: 2px 0;
        text-align: center;
        border-radius: 7px;
        font-size: 28px;
        width: 100px;
        height: 45px;
      }

      i.mintui.mintui-field-error {
        display: none;
      }
    }

    .safety-verification-tel {
      margin: 10px 0;
    }

  }
</style>