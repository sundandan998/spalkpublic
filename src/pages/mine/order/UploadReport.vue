<template>
  <div class="order-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <span class="fl"> <img src="../../../assets/images/l.svg" alt=""> 订单详情</span>
      <router-link :to="{name:'ReservationInformation'}">
        <span class="fr"> <img src="../../../assets/images/chain.svg" alt="" class="right-icon">预约信息</span>
      </router-link>
    </div>
    <!-- 名称及订单号 -->
    <div class="order-detail-cellname">
      <span>免疫细胞 - 存储10年</span>
      <p><span>订单号</span> <span @click="copyText"class="fr copy overflow-text tag-read" :data-clipboard-text="2564963">2564963
          <img src="../../../assets/images/copy.svg" alt=""></span></p>
    </div>
    <!-- 上传体检报告 -->
    <div class="upload-report">
      <p>上传体检报告</p>
      <span>*须是受服务人最近3个月内，病毒五项体检报告</span>
      <span>*医学专家将分析您的体检报告，以便提供专业服务</span>
      <div class="upload-img">
        <img src="../../../assets/images/upload.svg" alt="" @click="actionSheet">
        <span>添加图片/文件</span>
      </div>
      <mt-actionsheet :actions="actions" v-model="sheetVisible"> </mt-actionsheet>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'OrderDetail'}">
        <div class="left-btn fl">
          <van-button plain type="primary">上一步</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'OrderPending'}">
        <div class="right-btn fr">
          <van-button type="info">保存</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  // 复制方法
  import { copy } from '@/assets/js/common.js'
  import areaList from '@/assets/js/area'
  export default {
    data() {
      return {
        active: 0,
        areaList,
        sheetVisible: false,
        actions: [
          {
            name: '拍摄',
            method: this.getCamera
          },
          {
            name: '上传',
            method: this.getLibrary
          },
        ]
      }
    },
    created() {
    },
    methods: {
       // 复制功能
       copyText(){
        copy()
      },
      actionSheet() {
        this.sheetVisible = true
      },
      getCamera() {
        console.log("打开照相机")
      },
      getLibrary() {
        console.log("打开相册")
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .order-detail {
    .upload-report {
      margin-top: 20px;
      background-color: #fff;

      p {
        margin: 10px 0 10px 20px;
        padding-top: 30px;
        font-size: 28px;
        color: #036EB8;
        font-weight: 700;
      }

      span {
        display: block;
        margin-left: 20px;
        line-height: 40px;
      }

      .upload-img {
        margin-top: 50px;
        border: 1px dashed #a1a1a1;
        width: 200px;
        height: 200px;
        margin: 50px auto 0 auto;
        background-color: #FAFAFA;

        img {
          display: block;
          margin: 50px auto 0 auto;
        }

        span {
          display: block;
          text-align: center;
          margin-top: 20px;
          color: #a1a1a1;
          margin: 0 auto;
        }
      }
    }
  }
</style>