<template>
  <div class="forget-pwd backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'SafetyCenter'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 忘记支付密码</span>
      </router-link>
    </div>
    <div class="forget-pwd-content">
      <span>需要联系客服重置按客服需求提供相关材料</span>
      <p > <img src="../../../assets/images/tel.svg" alt=""> 客服电话:400-756-8888</p>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'SafetyCenter'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
        <div class="right-btn fr" >
          <van-button type="info" @click="copyText" class="copy overflow-text tag-read" :data-clipboard-text="18665156">复制电话</van-button>
        </div>
    </div>
  </div>
</template>
<script>
  // 复制方法
  import { copy } from '@/assets/js/common.js'
  export default {
    data() {
      return {

      }
    },
    created() {
      document.title = '忘记支付密码'
    },
    methods: {
      copyText(){
        copy()
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .forget-pwd {
    .forget-pwd-content {
      margin-top: 220px;
      text-align: center;
      font-size: 30px;

      p {
        color: #999;
        margin-top: 30px;
      }
    }
  }
</style>