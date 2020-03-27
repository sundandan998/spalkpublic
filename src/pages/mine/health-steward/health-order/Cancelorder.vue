<template>
  <div class="cancel-order">
    <!-- 标题 -->
    <div class="service-title title">
      <span v-on:click="$router.go(-1)"> <img src="../../../../assets/images/l.svg" alt=""> 取消订单</span>
    </div>
    <!-- 名称及订单号 -->
    <div class="order-detail-cellname">
      <span>免疫细胞 - 存储10年</span>
      <p><span>订单号</span> <span @click="copyText" class="fr copy overflow-text tag-read"
          :data-clipboard-text="2564963">2564963
          <img src="../../../../assets/images/copy.svg" alt=""></span></p>
    </div>
    <mt-cell title="受服务人" value="张三" />
    <!-- 取消原因 -->
    <div class="cancel-reason">
      <p>取消原因</p>
      <!-- v-model="message" -->
      <div class="cancel-content">
        <van-field row="5" autosize type="textarea" maxlength="50" placeholder="50字以内" show-word-limit />
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'HealthOrderDetail'}">
        <div class="left-btn fl">
          <van-button plain type="primary">我在想想</van-button>
        </div>
      </router-link>
      <div class="right-btn fr" @click="cancel">
        <van-button type="info">确认取消</van-button>
      </div>
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
      copyText() {
        copy()
      },
      // 取消订单弹框
      cancel(){
        this.$messagebox({
          title: '取消订单',
          message: '确认取消订单？',
          cancelButtonText: '我再想想',
          confirmButtonText: '确认取消',
          showCancelButton: true
        }).then(action => {
          if (action === 'confirm') {
            this.$router.push({
              name:'HealthOrderDetail'
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../../assets/scss/Global.scss";

  .cancel-order {
    .mint-cell-title {
      font-size: 12px;
      color: #a1a1a1;
    }

    .mint-cell-value {
      font-size: 12px;
      color: #a1a1a1;
    }

    .cancel-reason {
      background-color: #fff;
      padding-bottom: 20px;

      p {
        font-size: 32px;
        padding: 10px 20px;
      }

      .cancel-content {
        border: 1px solid #a1a1a1;
        margin: 10px 20px 0px 20px;
      }

      textarea.van-field__control {
        height: 100px !important;
      }
    }
  }
</style>