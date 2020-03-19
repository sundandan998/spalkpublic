<template>
  <div class="select-order">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../assets/images/l.svg" alt=""> 选择订单</span>
    </div>
    <div class="select-list service-cell">
      <div class="cell-img fl">
        <img src="../../assets/images/cell.jpg" alt="">
      </div>
      <router-link :to="{name:'SelectService'}">
        <van-card class="index-list-card fr" title="免疫细胞">
          <div class="index-list-text" slot="tags">
            <div class="label">
              <span>6164615</span>
            </div>
            <div slot="footer">
              <img src="../../assets/images/rightarrow.png" alt="" class="fr right-arrow">
            </div>
          </div>
        </van-card>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/Global.scss";
  .select-order{
    .select-list{
      margin-top: 50px;
    }
  }
</style>