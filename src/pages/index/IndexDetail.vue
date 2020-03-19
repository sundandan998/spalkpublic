<template>
  <div class="service-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../assets/images/l.svg" alt=""> 服务详情</span>
    </div>
    <!-- 细胞名称 -->
    <div class="service-cell">
      <div class="cell-img fl">
        <img src="../../assets/images/cell.jpg" alt="">
      </div>
      <van-card class="index-list-card fr" title="免疫细胞">
        <div class="index-list-text" slot="tags">
          <div class="label">
            <span>防御 |</span>
            <span>监控 |</span>
            <span>清洁</span>
          </div>
        </div>
      </van-card>
    </div>
    <!-- tab标签介绍 -->
    <div class="service-tab">
      <div class="tab-title">
        <van-tabs v-model="active">
          <van-tab title="服务介绍">服务介绍</van-tab>
          <van-tab title="产品特色">产品特色</van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'Index'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <div class="right-btn fr">
        <van-button type="info">预约</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 2,
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .service-detail {
    .service-title {
      background-color: #fff;
    }

    .service-cell {
      height: 250px;
      background-color: #fff;

      /* .cell-img {
        width: 30%;
        margin: 20px 0 20px 20px;
        border: 1px solid #ccc;
        img {
          height: 200px;
          width: 200px;
          border-radius: 50%;
        }
      } */
      .index-list-card {
        width: 67%;
        background-color: #fff;

        .index-list-text {
          margin: 20px 0 20px 0;
          color: #a1a1a1;
        }

        .van-card__title {
          font-size: 16px;
          margin-top: 15px;
        }
      }

    }

    .service-tab {
      background-color: #fff;

      .tab-title {
        width: 50%;
      }
    }

  }
</style>