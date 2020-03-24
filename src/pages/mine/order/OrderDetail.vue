<template>
  <div class="order-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <span class="fl" v-on:click="$router.go(-1)"> <img src="../../../assets/images/l.svg" alt=""> 订单详情</span>
      <router-link :to="{name:'ReservationInformation'}">
        <span class="fr"> <img src="../../../assets/images/chain.svg" alt="" class="right-icon">预约信息</span>
      </router-link>
    </div>
    <!-- 名称及订单号 -->
    <div class="order-detail-cellname">
      <span>免疫细胞 - 存储10年</span>
      <p><span>订单号</span> <span @click="copyText" class="fr copy overflow-text tag-read"
          :data-clipboard-text="2564963">2564963
          <img src="../../../assets/images/copy.svg" alt=""></span></p>
    </div>
    <!-- 服务人信息 -->
    <div class="information">
      <p>完善受服务人信息</p>
      <div class="select-tab">
        <van-tabs v-model="active">
          <van-tab title="本人">
            <mt-field label="姓名"></mt-field>
            <mt-field label="电话" readonly></mt-field>
            <mt-field label="身份证号"></mt-field>
            <mt-cell title="常住地址" is-link @click.native="showPopup">
              <van-popup position="bottom" v-model="show">
                <van-area :area-list="areaList" :columns-num="3" ref="myArea" />
              </van-popup>
            </mt-cell>
          </van-tab>
          <van-tab title="他人">
            <mt-field label="姓名" placeholder="请输入身份证上姓名"></mt-field>
            <mt-field label="电话" placeholder="请输入11位手机号码"></mt-field>
            <mt-field label="身份证号" placeholder="请输入身份证号码"></mt-field>
            <mt-cell title="常住地址" is-link>
            </mt-cell>
          </van-tab>
        </van-tabs>

      </div>
      <!-- </mt-cell> -->
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <!-- <router-link :to="{name:'MyOrder'}"> -->
      <div class="left-btn fl" v-on:click="$router.go(-1)">
        <van-button plain type="primary">返回</van-button>
      </div>
      <!-- </router-link> -->
      <router-link :to="{name:'UploadReport'}">
        <div class="right-btn fr">
          <van-button type="info">下一步</van-button>
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
        val: '',
        show:false,
      }
    },
    created() {
    },
    methods: {
      // 复制功能
      copyText() {
        copy()
      },
      showPopup(){
        this.show=!this.show
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .order-detail {
    .information {
      margin-top: 20px;
      background-color: #fff;

      p {
        margin: 10px 0 10px 20px;
        padding-top: 30px;
        font-size: 28px;
        color: #036EB8;
        font-weight: 700;
      }

      .select-tab {
        background-color: #fff;
        height: 150px;
      }
    }
  }
</style>