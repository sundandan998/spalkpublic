<template>
  <div class="pay-result">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../assets/images/l.svg" alt=""> 预约结果</span>
    </div>
    <div class="pay-information">
      <img src="../../assets/images/success.svg" alt="">
      <p>支付成功</p>
    </div>
    <div class="pay-btn">
        <van-button type="info">继续填写受服务人信息</van-button>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/Global.scss";
  .pay-result{
    .pay-information{
      margin:100px auto;
      text-align:center;
      img{
        width: 100px;
        margin-bottom: 40px;
      }
      p{
        font-size:32px;
        font-weight: 700px;
      }
    }
    .pay-btn{
      text-align: center;
      button{
        width: 80%;
      }
    }
  }
</style>