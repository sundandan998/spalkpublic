<template>
  <div class="register backcolor">
    <div class="register-title">
      <span>登录/注册</span>
      <p>未注册则将为您自动创建新账号</p>
    </div>
    <div class="register-tel">
      <img src="../../assets/images/register-phone.png" width="14px" height="21px" class="fl">
      <mt-field class="tel-input" @blur.native.capture="sendCode" placeholder="请填写手机号" v-model="registerParams.mobile">
        <img src="../../assets/images/register-delete.png" height="14px" width="14px" class="fr register-delete">
      </mt-field>
      <img src="../../assets/images/register-code.png" width="15px" height="17px" class="fl">
      <mt-field placeholder="请输入验证码" type="number" v-model="registerParams.code">
        <input class="send-input" v-on:click="sendSmsCode" readonly="readonly" v-model="btnCode.btnContent" />
      </mt-field>
    </div>
    <div class="register-button">
      <!-- <p>如果该手机号未曾注册过,将为您自动注册</p> -->
      <p>登录斯帕尔克即表明同意<span>《用户使用协议》</span> </p>
      <!-- <router-link to=""> -->
      <mt-button size="large" class="register-btn" @click.native="register" :disabled="disabled">下一步</mt-button>
      <!-- </router-link> -->
      <router-link to="/">
        <mt-button size="large" class="register-btn-cancel">取消</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
  // 接口请求
  import api from '@/api/user/User.js'
  import { Toast } from 'mint-ui'
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        info: {},
        disabled: true,
        CodeStatus: '',
        is_use: '',
        // 注册参数
        registerParams: {
          mobile: '',
          access_token: '081gf6QE1q4QC40op0TE1T77QE1gf6Qk',
          code: '',
        },
        // 发送验证码
        btnCode: {
          btnContent: '发  送',
          mobile: ''
        },
      }
    },
    created() {
      document.title = '斯帕尔克'
    },
    methods: {
      // 注册
      register() {
        // 判断用户是否注册过，如果已经注册进入首页，如果没有注册跳转code码页
        if (this.is_use == true) {
          // this.registerParams.access_token = sessionStorage.getItem('access_token')
          this.$store.dispatch('loginByCode', this.registerParams).then(res => {
            // 判断是否是新用户，如果是新用户，跳转到邀请码页面，如果不是新用户，跳转到首页
            if (this.$store.getters.token !== '') {
              this.$store.commit('detail', res.data)
              this.$router.push({
                name: 'Index'
              })
            }
          }).catch(err => {
            Toast({
              message: err.msg,
              position: 'top',
              className: 'zZindex'
            })
          })
        } else if (this.is_use == false) {
          this.$router.push({
            name:'Code',
            // params:{}
          })
        }

      },
      // 检测此用户是否注册过
      sendCode() {
        api.username({ mobile: this.registerParams.mobile }).then(res => {
          if (res.code == 0) {
            this.is_use = res.is_use
          }
        }).catch(err => {
          Toast({
            message: err.msg,
            position: 'top',
            className: 'zZindex'
          })
        })
      },
      // 发送验证码
      sendSmsCode() {
        this.time = 60
        this.timer()
        api.sendCode({ mobile: this.registerParams.mobile }).then(res => {
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
      registerParams: {
        immediate: true,
        deep: true,
        handler(val) {
          if (val.mobile && val.code != '') {
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
  @import "../../assets/scss/Global.scss";

  .register {
    .register-title {
      margin: 118px 0px 10px 54px;

      span {
        font-size: 60px;
        color: #333;
      }

      p {
        font-size: 26px;
        color: #9999;
        margin-bottom: 152px;
      }
    }
  }

  .send-input {
    border: none;
    float: right;
    width: 110px;
    height: 50px;
    border: 1px solid #4DABF0;
    border-radius: 10px;
    color: #4DABF0;
    text-align: center;
    font-size: 26px;
  }

  .register-tel {
    margin: 0 54px 124px 54px;

    .fl {
      position: relative;
      top: 40px;
      z-index: 1;
      left: 30px;
    }

    .register-delete {
      position: relative;
      top: 0px;
      z-index: 1;
    }

    .mint-field .mint-cell-value {
      margin-left: 20px;
    }

    .mint-cell-wrapper {
      border-bottom: 1px solid #d9d9d9;

      .mint-field-clear {
        display: none;
      }
    }
  }

  .register-button {
    margin: 32px 54px 10px 54px;

    p {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;

      span {
        color: #036EB8;
      }
    }

    .register-btn {
      width: 100%;
      height: 88px;
      background-color: #036EB8 !important;
      color: #fff;
      margin-bottom: 20px;
    }

    .register-btn-cancel {
      width: 100%;
      height: 88px;
      background-color: #fff;
      color: #036EB8 !important;
      border: 1px solid #036EB8;

    }
  }
</style>