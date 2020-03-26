<template>
  <div class="modify-pwd backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'SafetyVerification'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 修改支付密码</span>
      </router-link>
    </div>
    <!-- 支付密码框 -->
    <div class="modify-pwd-input">
      <span>原支付密码</span>
      <van-password-input :value="this.password.old_pay_pwd" :mask="true" @focus="passIndex1" />
      <span>新支付密码</span>
      <van-password-input :value="this.password.new_pay_pwd1" :mask="true" @focus="passIndex2" />
      <span>确认支付密码</span>
      <van-password-input :value="this.password.new_pay_pwd2" :mask="true" @focus="passIndex3" />
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'SafetyVerification'}">
        <div class="left-btn fl">
          <van-button plain type="primary">取消</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'SafetyCenter'}">
        <div class="right-btn fr">
          <van-button type="info"> 确认</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import api from '@/api/user/User.js'
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        index: 1,
        disabled: true,
        showKeyboard: false,
        password: {
          old_pay_pwd: '',
          new_pay_pwd1: '',
          new_pay_pwd2: ''
        }
      }
    },
    created() {
      document.title = '修改支付密码'

    },
    methods: {
      passIndex1() {
        this.showKeyboard = true
        this.index = 1
      },
      passIndex2() {
        this.showKeyboard = true
        this.index = 2
      },
      passIndex3() {
        this.showKeyboard = true
        this.index = 3
      },
      onInput(key) {
        if (this.index === 1) {
          this.password.old_pay_pwd = (this.password.old_pay_pwd + key).slice(0, 6)
        } else {
          if (this.index === 2) {
            this.password.new_pay_pwd1 = (this.password.new_pay_pwd1 + key).slice(0, 6)
          } else {
            if (this.index === 3) {
              this.password.new_pay_pwd2 = (this.password.new_pay_pwd2 + key).slice(0, 6)
            }
          }
        }
      },
      onDelete(key) {
        if (this.index === 1) {
          this.password.old_pay_pwd = this.password.old_pay_pwd.slice(0, this.password.old_pay_pwd.length - 1)
        } else {
          if (this.index == 2) {
            this.password.new_pay_pwd1 = this.password.new_pay_pwd1.slice(0, this.password.new_pay_pwd1.length - 1)
          } else {
            if (this.index == 3) {
              this.password.new_pay_pwd2 = this.password.new_pay_pwd2.slice(0, this.password.new_pay_pwd2.length - 1)
            }
          }
        }
      },
      // 修改密码
      edit() {
        api.editPwd(this.password).then(res => {
          if (res.code == 0) {
            Toast({
              message: res.msg,
              position: 'top',
              className: 'zZindex'
            })
            this.$router.push({
              name: 'SafetyCenter'
            })
          }
        }).catch(err => {
          if (err.code != 0) {
            Toast({
              message: err.msg,
              position: 'top',
              className: 'zZindex'
            })
          }
        })
      },
    },
    watch: {
      password: {
        immediate: true,
        deep: true,
        handler(val) {
          if (val.old_pay_pwd && val.new_pay_pwd1 && val.new_pay_pwd2 !== '') {
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

  .modify-pwd {
    .modify-pwd-input {
      /* margin: 138px auto; */

      span {
        font-size: 30px;
        color: #333;
        display: block;
        margin: 20px 30px;
      }
    }
  }
</style>