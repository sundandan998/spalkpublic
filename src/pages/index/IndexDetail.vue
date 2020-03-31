<template>
  <div class="service-detail backcolor">
    <!-- 标题 -->
    <!-- <div class="fixed-title"> -->
      <router-link to="/">
        <div class="service-title title">
          <span> <img src="../../assets/images/l.svg" alt=""> 服务详情</span>
        </div>
      </router-link>
      <!-- 细胞名称 -->
      <div class="service-cell">
        <div class="cell-img fl">
          <img :src="detailData.icon" alt="">
        </div>
        <van-card class="index-list-card fr" :title="detailData.name">
          <div class="index-list-text" slot="tags">
            <div class="label" v-for="item in labels">
              <span>{{item}} <span>|</span></span>
            </div>
          </div>
        </van-card>
      </div>
    <!-- </div> -->
    <!-- tab标签介绍 -->
    <div class="service-tab">
      <div class="tab-title">
        <van-tabs v-model="active">
          <van-tab title="服务介绍">
            <span class="decs" v-html="this.detailData.decs">{{this.detailData.decs}}</span>
          </van-tab>
          <van-tab title="产品特色">
            <span class="decs" v-html="this.detailData.feature">{{this.detailData.feature}}</span>
          </van-tab>
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
      <router-link :to="{name:'SelectService',params:{id:this.detailData.id,url:'detail'}}">
        <div class="right-btn fr">
          <van-button type="info">预约</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import api from '@/api/service/Service.js'
  export default {
    data() {
      return {
        active: 2,
        detailData: '',
        labels: [],
      }
    },
    created() {
      this.detail()
    },
    methods: {
      detail() {
        api.listDetail({ id: this.$route.params.id }).then(res => {
          this.detailData = res.data
          this.labels = res.data.labels
        }).catch(err => {

        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .service-detail {

    .fixed-title {
      /* position: fixed;
      top: 0px;
      width: 100%;
      z-index: 1; */
    }

    .service-tab {
      .decs{
        width: 100%;
        height: 100%;
      }
      /* margin-top: 350px; */
    }

  }
</style>