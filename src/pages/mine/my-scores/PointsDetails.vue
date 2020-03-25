<template>
  <div class="details">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'MyScores'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 明细</span>
      </router-link>
    </div>
    <!-- 明细列表 -->
    <div class="details-list">
      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="100" -->
      <!-- :error.sync="error" error-text="请求失败，点击重新加载"> -->
      <!-- v-for="item in listData" -->
      <div class="details-list">
        <router-link :to="{name:'CreditDetails'}">
          <div class="details-text">
            <p class="status"><span>转出</span><span class="fr num">100000</span></p>
            <p class="blance"><span>02-02</span><span class="fr">余额2000</span></p>
          </div>
          <div class="details-text">
            <p class="status"><span>转出</span><span class="fr num">100000</span></p>
            <p class="blance"><span>02-02</span><span class="fr">余额2000</span></p>
          </div>
        </router-link>
      </div>
      <!-- </van-list> -->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 上拉加载
        loading: false,
        finished: false,
        error: false,
        pageNum: 1,
      }
    },
    methods: {
      // 上拉加载
      // onLoad() {
      //   setTimeout(() => {
      //     // 请求列表接口
      //   }, 100)
      // },
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .details {
    .details-list {
      .details-text {
        background-color: #fff;
        padding:20px 20px 20px 25px;
        .status {
          margin-bottom: 20px;
          font-size: 28px;
          color: #656565;

          .num {
            color: #FF7272;
          }
        }

        .blance {
          font-size: 24px;
          color: #a1a1a1;
        }
      }
    }
  }
</style>