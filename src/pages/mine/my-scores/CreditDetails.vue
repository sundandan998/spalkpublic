<template>
  <div class="mx-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'PointsDetails'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 明细详情</span>
      </router-link>
    </div>
    <div class="details-title">
      <p>消费 - 免疫细胞-存储10年</p>
      <p>+ 200,000 积分</p>
    </div>
    <mt-cell title="流水号" value="20516516" />
    <mt-cell title="交易时间" value="20516516" />
    <mt-cell title="余额" value="20516516" />
    <mt-cell title="关联订单" value="20516516" to="serviced" is-link />
    <mt-cell title="对方账号" value="20516516" to="serviced" is-link />

    <!-- 底部按钮 -->
    <router-link :to="{name:'PointsDetails'}">
      <div class="back-btn">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .mx-detail {
    .details-title {
      background-color: #fff;
      overflow: hidden;

      p {
        text-align: center;
        margin: 20px auto;
        font-size: 30px;
        color: #036EB8;
      }
    }

    .mint-cell-text {
      color: #a1a1a1;
    }
  }
</style>