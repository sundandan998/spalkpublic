<template>
  <div class="agent backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link to="Agent">
        <span> <img src="../../../assets/images/l.svg" alt=""> 代理商用户</span>
      </router-link>
    </div>
    <div class="agent-search">
      <!-- v-model="value" -->
      <van-search placeholder="手机号/姓名" />
    </div>
    <div class="agent-list">
      <p>小计x人</p>
      <!-- <router-link to="userdetail"> -->
        <mt-cell title="张三" label="158555" value="2021588" to="userdetail" is-link />
      <!-- </router-link> -->
    </div>
    <!-- 底部按钮-->
    <router-link to="Agent">
      <div class="back-btn">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .agent {
    .agent-list {
      background-color: #fff;

      p {
        padding: 20px;
        margin-left: 10px;
        font-size: 32px;
        border-bottom: 1px solid #f2f2f2;
      }
    }
  }
</style>