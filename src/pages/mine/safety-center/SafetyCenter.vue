<template>
  <div class="safety-center">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 安全中心</span>
      </router-link>
    </div>
    <router-link :to="{name:'ModifyTel'}">
      <div class="safety-center-tel">
        <mt-cell title="手机号" is-link value="1885564"></mt-cell>
      </div>
    </router-link>
    <div class="set-pwd">
    <router-link :to="{name:'SafetyVerification',params:{click:'set'}}">
      <mt-cell title="设置支付密码"  is-link class="modify-pay-pwd"></mt-cell>
    </router-link>
    </div>
    <router-link :to="{name:'SafetyVerification',params:{click:'modify'}}">
      <mt-cell title="修改支付密码" is-link class="modify-pwd"></mt-cell>
    </router-link>
    <mt-cell title="忘记支付密码" to="forget" is-link class="modify-pay-pwd"></mt-cell>
    <router-link to="mine">
      <div class="back-btn">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<script>
  // 接口请求
  import api from '@/api/user/User.js'
  export default {
    data() {
      return {

      }
    },
    created() {
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .safety-center {
    .safety-center-tel {
      margin: 20px 0;
    }

    .set-pwd {
      border-bottom: 1px solid #f2f2f2;
    }
  }
</style>