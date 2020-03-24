<template>
  <div class="medical-report">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../../assets/images/l.svg" alt=""> 体检报告</span>
    </div>
    <div class="back-btn" v-on:click="$router.go(-1)">
      <van-button type="info" size="large">返回</van-button>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";
</style>