<template>
  <div class="transfer-out">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'MyScores'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 转出</span>
      </router-link>
    </div>
    <div class="account-number title">
      <p>收款账号</p>
      <mt-field>
        <img src="../../../assets/images/scan.svg" alt="">
      </mt-field>
    </div>
    <div class="out-number title">
      <p>转出数量 (积分)</p>
      <mt-field>
        <span>全部</span>
      </mt-field>
    </div>
    <p class="handling-fee">手续费：推广期暂免</p>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <p class="scan">扫一扫</p>
      <router-link :to="{name:'MyScores'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'TurnConfirm'}">
        <div class="right-btn fr">
          <van-button type="info">下一步</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .transfer-out {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;

    .title {
      margin: 40px 20px 20px 20px;
      font-size: 28px;
    }

    .handling-fee {
      margin: 20px 0 0 20px;
      font-size: 24px;
    }
    .bottom-btn{
      .scan{
        margin:0 auto 40px auto;
        text-align:center;
        font-size:28px;
        color:#036EB8;
      }
    }
  }
</style>