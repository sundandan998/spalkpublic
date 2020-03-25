<template>
  <div class="person-center backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 个人信息</span>
      </router-link>
    </div>
    <div class="person-info">
      <mt-cell title="姓名" value="zs" />
      <mt-cell title="手机号">
        <span @click="copyText" class="copy overflow-text tag-read" :data-clipboard-text="18665156">18665156 <img
            src="../../../assets/images/copy.svg" alt=""> </span>
      </mt-cell>
      <mt-cell title="身份证号" value="zs" />
      <mt-cell title="常住地址" value="zs" />
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'EditInformation'}">
        <div class="left-btn fl">
          <van-button plain type="primary">修改</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Mine'}">
        <div class="right-btn fr">
          <van-button type="info">返回</van-button>
        </div>
      </router-link>
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
      // document.title = '资产中心'
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

  .person-center {
    .person-info {
      img {
        width: 30px;
      }
    }
  }
</style>