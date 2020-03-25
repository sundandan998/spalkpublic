<template>
  <div class="housekeeper backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 专属管家</span>
      </router-link>
    </div>
    <div class="housekeeper-title">
      <p>管家-奇奇</p>
      <p class="tel-num">26518489</p>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'Mine'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <div @click="copyText" class=" right-btn fr copy overflow-text tag-read" :data-clipboard-text="18665156">
        <van-button type="info">复制电话</van-button>
      </div>
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

  .housekeeper {
    .housekeeper-title {
      margin-top: 50px;

      p {
        text-align: center;
        font-size: 28px;
      }

      .tel-num {
        font-size: 36px;
        margin-top: 20px;
      }
    }
  }
</style>