<template>
    <div class="select-service">
      <!-- 标题 -->
      <div class="service-title title">
        <span> <img src="../../assets/images/l.svg" alt=""> 预约服务 <img src="" alt=""></span>
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
            <div class="price">
              <span>3966积分</span>
            </div>
          </div>
        </van-card>
      </div>
      <!-- 服务规格 -->
      <div class="service-specification">
        <span>服务规格</span>
        <p>免疫细胞-存储10年</p>
      </div>
      <!-- 底部按钮 -->
      <div class="bottom-btn">
        <router-link :to="{name:'Index'}">
          <div class="left-btn fl">
            <van-button plain type="primary">返回</van-button>
          </div>
        </router-link>
        <div class="right-btn fr">
          <van-button type="info">下一步</van-button>
        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
        }
      }
    }
  </script>
  <style lang="scss">
    @import "../../assets/scss/Global.scss";
  
    .select-service {
      .service-title {
        background-color: #fff;
      }
      .service-cell {
        height: 250px;
        background-color: #fff;
  
        .index-list-card {
          width: 67%;
          background-color: #fff;
  
          .index-list-text {
            margin: 20px 0 20px 0;
            color: #a1a1a1;
            .price{
              margin-top: 30px;
              font-size:30px;
              color:#F05246;
            }
          }
          .van-card__title {
            font-size: 16px;
            margin-top: 15px;
          }
        }
  
      }
      .service-specification{
        background-color: #fff;
        span{
          margin:40px 0 20px 20px;
          display: inline-block;
          font-size:30px;
          color:#036EB8;
        }
        p{
          margin:20px;
          border:1px solid #036EB8;
          padding:20px 10px;
          font-size:26px;
          border-radius:10px;
          width: 60%;
          text-align: center;
        }
      }
  
    }
  </style>