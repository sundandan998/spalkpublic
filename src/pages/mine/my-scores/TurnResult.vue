<template>
  <div class="turn-result">
    <div class="service-title title">
      <router-link :to="{name:'TurnConfirm'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 转出结果</span>
      </router-link>
    </div>
    <div class="turn-img">
      <img src="../../../assets/images/success.svg" alt="">
      <p>转出成功</p>
      <p class="num">20000 <span>( 积分)</span></p>
    </div>
    <mt-cell title="收款方" value="5615" />
    <!-- 底部按钮 -->
    <router-link :to="{name:'MyScores'}">
      <div class="back-btn">
        <van-button type="info" size="large">完成</van-button>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .turn-result {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;

    .turn-img {
      margin: 50px auto;
      text-align: center;

      img {
        width: 130px;
      }
      .num {
          font-size: 48px;
        }
      p {
        margin: 20px 0;
        font-size: 30px;
        color: #036EB8;

        span {
          font-size: 24px;
        }
      }
    }
  }
</style>