<template>
  <div class="buy-result">
    <img src="../../assets/images/success.svg" alt="">
    <p>我们已收到订单,请联系代理商付款</p>
    <div class="buy-result-button">
      <router-link to="/">
        <van-button square size="large" type="default">好的</van-button>
      </router-link>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .buy-result {
    img {
      margin: 40px auto;
      display: block;
    }

    p {
      margin: 50px auto;
      text-align: center;
    }

    .buy-result-button {
      button {
        height: 40px;
        line-height:40px;
        border:1px solid #259B24;
        background-color: #fff;
        color: #259B24;
        border-radius: 25px;
        position: fixed;
        bottom: 2px;
      }
    }
  }
</style>