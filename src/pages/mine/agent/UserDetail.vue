<template>
  <div class="user-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <span v-on:click="$router.go(-1)"> <img src="../../../assets/images/l.svg" alt=""> 用户详情</span>
    </div>
    <!-- 用户详情 -->
    <div class="user-infomation">
      <mt-cell title="姓名" value="张三" />
      <mt-cell title="手机号">
        <span @click="copyText" class="copy overflow-text tag-read" :data-clipboard-text="18665156">18665156 <img
            src="../../../assets/images/copy.svg" alt=""> </span>
      </mt-cell>

      <mt-cell title="身份证号" value="张三" />
      <mt-cell title="地区" value="张三" />
    </div>
    <!-- 底部按钮 -->
    <div class="scores-btn">
      <router-link :to="{name:'HealthOrder'}">
        <div class="into-btn fl">
          <van-button type="default">TA的订单</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'AgentUser'}">
        <div class="out-btn fr">
          <van-button type="info">返回</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import { copy } from '@/assets/js/common.js'
  export default {
    data() {
      return {

      }
    },
    methods: {
      copyText() {
        copy()
      }
    }
  }
</script>
<style lang="scss">
  @import '../../../assets/scss/Global.scss';

  .user-detail {
    .user-infomation {
      img {
        width: 30px;
      }
    }
  }
</style>