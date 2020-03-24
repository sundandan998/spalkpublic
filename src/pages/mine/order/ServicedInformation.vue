<template>
  <div class="serviced-information">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../../assets/images/l.svg" alt=""> 用户信息</span>
    </div>
    <div class="service-body">
      <mt-cell title="姓名" value="张三" />
      <mt-cell title="手机号" value="15897985225" />
      <mt-cell title="身份证号" value="152635646565948" />
      <mt-cell title="常住地址" value="北京市昌平区" />
    </div>
    <div class="back-btn" v-on:click="$router.go(-1)">
      <van-button type="info" size="large">返回</van-button>
    </div>
  </div>

</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .serviced-information {
    .service-body {
      margin-top: 1px;
    }
  }
</style>