<template>
  <div class="select-service">
    <!-- 标题 -->
    <div class="service-title title">
      <span class="fl"> <img src="../../assets/images/l.svg" alt=""> 预约服务</span>
      <span class="fr" @click="service"> <img src="../../assets/images/ministry.svg" alt="" class="right-icon"></span>
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
      <!-- <router-link :to="{name:'Index'}"> -->
      <div class="left-btn fl" v-on:click="$router.go(-1)">
        <van-button plain type="primary">返回</van-button>
      </div>
      <!-- </router-link> -->
      <router-link :to="{name:'ConfirmReservation'}">
        <div class="right-btn fr">
          <van-button type="info">下一步</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import { copy } from '@/assets/js/common.js'
  export default {
    data() {
      return {
      }
    },
    methods: {
      service() {
        // 删除地址弹框
        this.$messagebox({
          title: '专属管家',
          message: '管家-奇奇 15898956235',
          cancelButtonText: '我知道了',
          confirmButtonText: '复制号码',
          showCancelButton: true
        }).then(action => {
          if (action === 'confirm') {
            // copyTel()
            // api.delAdress(this.$route.params).then(res => {
            // 	toast(res)
            // 	this.$router.push({
            // 		name: 'Book'
            // 	})
            // }).catch(err => {
            // 	toast(err)
            // })
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .select-service {

    .service-specification {
      background-color: #fff;

      span {
        margin: 40px 0 20px 20px;
        display: inline-block;
        font-size: 30px;
        color: #036EB8;
      }

      p {
        margin: 20px;
        border: 1px solid #036EB8;
        padding: 10px 10px;
        font-size: 26px;
        border-radius: 10px;
        width: 40%;
        text-align: center;
      }
    }

  }
</style>