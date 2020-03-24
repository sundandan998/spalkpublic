<template>
  <div class="reservation-information">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../../assets/images/l.svg" alt=""> 预约信息</span>
    </div>
    <div class="reservation-info">
      <div class="reservation-info-text">
        <p>免疫细胞 - 存储10年 + 制备3次</p>
        <mt-cell title="预约单号">
          <span @click="copyText":data-clipboard-text="152635646565948" class="copy overflow-text tag-read">
            <span class="order-number">152635646565948</span>
            <img slot="icon" clas="fr" src="../../../assets/images/copy.svg" alt="">
          </span>
        </mt-cell>
        <mt-cell title="预约时间" value="152635646565948" />
        <mt-cell title="服务费用" value="152635646565948" />
        <mt-cell title="福都抵扣" value="152635646565948" />
        <span class="pay fr">实付 6363</span>
      </div>
    </div>
    <!-- 订单列表 -->
    <div class="order-list">
      <!-- <router-link to="path"> -->
        <div class="service-cell">
          <div class="cell-img fl">
            <img src="../../../assets/images/cell.jpg" alt="">
          </div>
          <van-card class="index-list-card fr" title="免疫细胞">
            <div class="index-list-text" slot="tags">
              <div class="label">
                <span>1616165</span>
              </div>
              <div class="name">
                <span>张三</span> <span>1651565</span>
              </div>
              <span class="fr order-status">待完善</span>
            </div>
          </van-card>
        </div>
      <!-- </router-link> -->
    </div>
    <!-- 底部按钮 -->
    <div class="back-btn" v-on:click="$router.go(-1)">
      <van-button type="info" size="large">返回</van-button>
    </div>
  </div>
</template>
<script>
  // 复制方法
  import { copy } from '@/assets/js/common.js'
  export default {
    data() {
      return {

      }
    },
    created() {
    },
    methods: {
       // 复制功能
       copyText(){
        copy()
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .reservation-information {
    .reservation-info {
      background-color: #fff;
      height: 500px;

      .reservation-info-text {
        margin: 1px 0 20px 20px;

        .order-number {
          position: relative;
          top: 10px;
          right: 5px;
        }

        .mint-cell img {
          width: 20px;
          float: right;
        }

        p {
          padding-top: 20px;
          margin-left: 20px;
          font-size: 30px;
        }

        .mint-cell-text {
          font-size: 12px;
          color: #a1a1a1;
        }

        .mint-cell-value {
          font-size: 12px;
          color: #a1a1a1;
        }

        .pay {
          font-size: 28px;
          color: #BC0017;
          margin-right: 20px;
          background-color: #fff;
        }
      }
    }
    .order-list{
      margin:20px 0;
      .order-status{
        position: relative;
        top:-60px;
      }
    }
  }
</style>