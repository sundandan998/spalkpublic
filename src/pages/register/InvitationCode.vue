<template>
  <div class="code backcolor">
    <div class="code-title">
      <span>填写邀请码</span>
    </div>
    <div class="invite-code">
      <!-- v-model="registerParams.invite_code" -->
      <mt-field label="邀请码" placeholder="请输入邀请码" v-model="code.invite_code"></mt-field>
      <p>*邀请码可向代理商索取</p>
    </div>
    <div class="code-btn">
      <van-button square size="large" :disabled="disabled" @click.native="submitCode">下一步</van-button>
      <router-link to="/">
        <van-button square size="large">跳过</van-button>
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
        code: {
          invite_code: ''
        }
      }
    },
    created() {
      document.title = '斯帕尔克'
    },
    methods: {
      submitCode() {
        api.inviteCode(this.code).then(res => {
          if (res.can_use == true) {
            api.subCode(this.code).then(res => {
              if (res.code == 0) {
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
          }
        }).catch(err => {
          Toast({
            message: err.msg,
            position: 'top',
            className: 'zZindex'
          })
        })
      }
    },
    watch: {
      code: {
        immediate: true,
        deep: true,
        handler(val) {
          let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6}$/
          if (val.invite_code != '' && reg.test(val.invite_code)) {
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
  @import '../../assets/scss/Global.scss';

  .code {
    .code-title {
      margin: 180px 0 100px 54px;
      font-size: 36px;
      color: #333;
    }

    .invite-code {
      margin: 0 54px 20px 54px;

      p {
        font-size: 24px;
        color: #333;
      }
    }

    .code-btn {
      margin: 200px 54px 10px 54px;

      button {
        width: 100%;
        height: 88px;
        line-height: 88px;
        background-color: #036EB8;
        color: #fff;
        margin-bottom: 20px;
      }
    }

    .code-btn button:last-child {
      background-color: #fff;
      border: 1px solid #036EB8;
      color: #036EB8;
    }
  }
</style>