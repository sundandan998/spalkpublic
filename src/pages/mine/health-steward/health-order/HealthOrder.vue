<template>
  <div class="health-order">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span class="fl"> <img src="../../../../assets/images/l.svg" alt=""> 用户订单</span>
      </router-link>
      <span class="fr" @click="showPopup">筛选</span>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="top" :style="{ height: '45%' }">
      <van-search v-model="value" show-action placeholder="受服务人手机号/姓名" @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <div class="search-text">
        <p>待受理</p>
        <span>待初审</span>
        <span>待审核</span>
        <span>审核未通过</span>
        <p>
          <span>待安排</span>
          <span>待确认</span>
        </p>
        <p>服务中</p>
        <span>服务中</span>
        <span>待传证</span>
        <p>其他</p>
        <span>已完成</span>
        <span>已取消</span>
        <span>全部</span>
      </div>
    </van-popup>
    <!-- 订单列表 -->
    <div class="product">
      <div class="service-cell">
        <div class="cell-img fl">
          <img src="../../../../assets/images/cell.jpg" alt="">
        </div>
        <router-link :to="{name:'HealthOrderDetail'}">
          <van-card class="index-list-card fr" title="张三 156166">
            <div class="index-list-text" slot="tags">
              <div class="label">
                <span>免疫细胞细胞制备</span>
              </div>
              <span class="fr order-status">待完善</span>
            </div>
          </van-card>
        </router-link>
      </div>
      <div class="no-data">
        <p>暂无数据</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        show: false,
        value: ''
      }
    },
    methods: {
      showPopup() {
        this.show = true
      },
      onSearch(val) {
        Toast(val)
      },
    }
  }
</script>
<style lang="scss">
  @import "../../../../assets/scss/Global.scss";

  .health-order {
    .search-text {
      margin: 20px 0 0px 30px;

      p {
        margin: 30px 0;
        font-size: 28px;
      }

      span {
        font-size: 24px;
        border: 1px solid #036EB8;
        padding: 10px 20px;
        border-radius: 20px;
        color: #036EB8;
        margin-right: 30px;
      }
    }
  }
</style>