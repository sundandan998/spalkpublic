<template>
  <div class="zsgl">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../../assets/images/l.svg" alt=""> 证书管理</span>
      </router-link>
    </div>
    <div class="order-list">
      <router-link :to="{name:'CertificateDetail'}">
      <div class="service-cell">
        <div class="cell-img fl">
          <img src="../../../../assets/images/cell.jpg" alt="">
        </div>
        <van-card class="index-list-card fr" title="免疫细胞">
          <div class="index-list-text" slot="tags">
            <div class="label">
              <span>1616165</span>
            </div>
            <div class="name">
              <span>张三</span> <span>1651565</span>
            </div>
            <img src="../../../../assets/images/r.svg" alt="" class="fr right-img">
          </div>
        </van-card>
      </div>
      </router-link>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'FillInformation'}">
        <div class="left-btn fl">
          <van-button plain type="primary">上传证书</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Mine'}">
        <div class="right-btn fr">
          <van-button type="info">返回</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../../assets/scss/Global.scss";
  .zsgl{
    .order-list{
      .right-img{
        position: relative;
        top:-50px;
      }
    }
  }
</style>