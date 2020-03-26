<template>
  <div class="home">
    <!-- 头像部分 -->
    <router-link :to="{name:'PersonCenter'}">
      <div class="home-title">
        <div class="home-title-icon fl"><img src="../../assets/images/avatar.svg" alt=""
            class="fl"><span>1589895658</span></div>
        <img src="../../assets/images/r.svg" alt="" class="fr arrow">
      </div>
    </router-link>
    <!-- 我的账户 -->
    <div class="home-account">
      <p><img src="../../assets/images/account.svg" alt=""> <span>我的账户</span></p>
      <div class="home-account-balance">
        <router-link to="scores">
          <div class="home-integral fl">
            <p><img src="../../assets/images/integral.svg" alt="">我的积分</p>
            <p>20000</p>
          </div>
        </router-link>
        <div class="home-fd fr">
          <p><img src="../../assets/images/fd.svg" alt=""> 我的福豆</p>
          <p>20000</p>
        </div>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="home-body">
      <mt-cell title="我的订单" to="myorder" is-link>
        <img slot="icon" src="../../assets/images/order.svg">
      </mt-cell>
      <mt-cell title="用户订单" to="myorder" is-link>
        <img slot="icon" src="../../assets/images/order.svg">
      </mt-cell>
      <mt-cell title="代理商管理" to="assets" is-link>
        <img slot="icon" src="../../assets/images/agent.svg">
      </mt-cell>
      <mt-cell title="我的证书" to="certificate" is-link>
        <img slot="icon" src="../../assets/images/access.svg">
      </mt-cell>
      <mt-cell title="邀请管理" to="invite" is-link>
        <img slot="icon" src="../../assets/images/address.svg">
      </mt-cell>
      <mt-cell title="专属管家" to="housekeeper" is-link>
        <img slot="icon" src="../../assets/images/ministry.svg">
      </mt-cell>
      <mt-cell title="安全中心" to="safety" is-link>
        <img slot="icon" src="../../assets/images/safety.svg">
      </mt-cell>
    </div>
    <!-- 底部tabber -->
    <div>
      <app-tabber :message="selected"></app-tabber>
    </div>
  </div>
</template>
<script>
  import Tabber from '../../assets/tabber/Tabber.vue'
  export default {
    data() {
      return {
        selected: 'mine',
        message: 'mine',
      }
    },
    components: {
      'app-tabber': Tabber
    },
    created() {
      document.title = '斯帕尔克'
    },
    methods: {

    }
  }
</script>
<style lang="scss">
  @import '../../assets/scss/Global.scss';
  .mint-cell-text{
    font-size: 14px;
    margin-left: 5px;
  }
  .home {
    .home-title {
      height: 150px;
      background-color: #fff;
      margin: 0 0 20px 0;

      .home-title-icon {
        margin: 40px 0px 0 20px;

        img {
          height: 80px;
        }

        span {
          margin-left: 20px;
          position: relative;
          top: 20px;
          font-size: 30px;
        }
      }

      .arrow {
        position: relative;
        top: 70px;
        right: 20px;
      }
    }

    /* 账户 */
    .home-account {
      background-color: #fff;
      margin-bottom: 10px;

      p {
        padding: 20px 0 10px 25px;

        span {
          position: relative;
          top: -10px;
          left: 10px;
          font-size: 28px;
        }

        img {
          width: 40px;
        }
      }

      .home-account-balance {
        margin: 0 20px;
        height: 160px;

        img {
          position: relative;
          top: 10px;
          right: 5px;
        }

        p {
          text-align: center;
          font-size: 26px;
        }

        .home-integral {
          background-color: #F2F2F2;
          width: 45%;
          border-radius: 10px;
        }

        .home-fd {
          background-color: #F2F2F2;
          width: 45%;
          border-radius: 10px;
        }
      }
    }

    .home-body {
      .mint-cell {
        margin-bottom: 5px;
      }
    }
  }
</style>