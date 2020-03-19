<template>
  <div class="index">
    <!-- 标题 -->
    <div class="index-title">
      <span><img src="../../assets/images/service.svg" alt="">请选择服务</span>
    </div>
    <!-- 服务列表 -->
    <div class="index-list">
      <div class="cell-img fl">
        <img src="../../assets/images/cell.jpg" alt="">
      </div>
      <router-link :to="{name:'SelectService'}">
      <van-card class="index-list-card fr" title="免疫细胞">
        <div class="index-list-text" slot="tags">
          <div class="label">
            <span>防御 |</span>
            <span>监控 |</span>
            <span>清洁</span>
          </div>
          <div slot="footer">
            <router-link to="detail">
              <van-button size="small">查看详情</van-button>
            </router-link>
            <img src="../../assets/images/rightarrow.png" alt="" class="fr right-arrow">
          </div>
        </div>
      </van-card>
    </router-link>
    </div>
    <!-- 底部tabber -->
    <div>
      <tabber :message="selected"></tabber>
    </div>
  </div>
</template>
<script>
  import Tabber from '../../assets/tabber/Tabber.vue'
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        selected: 'index',
        message: 'index',
      }
    },
    created() {
      document.title = '斯帕尔克'
    },
    components: {
      Tabber,
    },
    methods: {

    },
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .index {
    .index-title {
      background-color: #fff;
      span {
        font-size: 36px;
        color: #036EB8;
        display: block;
        margin: 0 0 1px 20px;
        height: 80px;
        line-height: 80px;
      }

      img {
        position: relative;
        top: 12px;
        margin-right: 10px;
      }
    }

    .index-list {
      background-color: #fff;
      height: 250px;
      .index-list-card {
        background-color: #fff;
        width: 67%;
        .van-card__title {
          font-size: 16px;
          margin: 5px 5px;
        }

        .index-list-text {
          margin: 0 10px;
          color: #A1A1A1;

          .label {
            margin: 10px 0 20px 0;
          }

          .van-button__text {
            color: #A1A1A1;
          }

          .right-arrow {
            width: 20px;
            color: #A1A1A1;
            margin-top: -40px;
          }
        }
      }
    }
  }
</style>