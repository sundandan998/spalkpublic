<template>
  <div class="service-order">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../../assets/images/l.svg" alt=""> 用户订单</span>
      </router-link>
    </div>
    <!-- tab标签 -->
    <div class="order-tab">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div class="product">
            <router-link :to="{name:'ServiceDetail'}">
              <div class="service-cell">
                <p>2020020220200009</p>
                <div class="cell-img fl">
                  <img src="../../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="张三 156166">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>免疫细胞细胞制备</span>
                    </div>
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="待确认">内容 2</van-tab>
        <van-tab title="服务中">内容 3</van-tab>
        <van-tab title="服务完成">内容 4</van-tab>
        <van-tab title="已取消">内容 4</van-tab>
      </van-tabs>
    </div>
    <router-link to="mine">
      <div class="back-btn">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    }
  }
</script>
<style lang="scss">
  @import '../../../../assets/scss/Global.scss';

  .service-order {
    .service-cell {
      height: 320px;

      p {
        font-size: 28px;
        color: #F05246;
        padding: 20px 20px 10px 20px;
      }
    }
  }
</style>