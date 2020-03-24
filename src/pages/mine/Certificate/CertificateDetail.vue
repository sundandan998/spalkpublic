<template>
  <div class="certificate-detail">
    <!-- 底部按钮 -->
    <div class="back-btn" v-on:click="$router.go(-1)">
      <van-button type="info" size="large">返回</van-button>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";
</style>