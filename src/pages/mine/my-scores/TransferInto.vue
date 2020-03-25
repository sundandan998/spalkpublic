<template>
  <div class="transfer-into">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'MyScores'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 转入</span>
      </router-link>
    </div>
    <div class="transfer-into-title">
      <P>积分</P>
    </div>
    <!-- 二维码部分 -->
    <div class="to-change-into-qrcode">
      <div id='code'></div>
      <canvas id="canvas"></canvas>
    </div>
    <div class="transfer-into-bottom">
      <span @click="copyText" class="copy overflow-text tag-read"
      :data-clipboard-text="18665156">您的转出账号:18665156 <img src="../../../assets/images/copy.svg" alt="" class="copy-img"></span>
    </div>
    <div class="back-btn" v-on:click="$router.go(-1)">
      <van-button type="info" size="large">返回</van-button>
    </div>
  </div>
</template>
<script>
   // 复制方法
   import { copy } from '@/assets/js/common.js'
  import qrcode from 'qrcode'
  export default {
    data() {
      return {

      }
    },
    components: {
      qrcode: qrcode
    },
    mounted() {
      this.useqrcode()
    },
    methods: {
      copyText(){
        copy()
      },
      // 生成二维码
      useqrcode() {
        let canvas = document.getElementById('canvas')
        // this.detail.address,
        qrcode.toCanvas(canvas, '18665156', function (error) {
          if (error) console.error(error)
        })
      },
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";
  canvas#canvas {
    width: 500px !important;
    height: 500px !important;
    display: block;
    margin: 0 auto;
  }
  .transfer-into {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    .transfer-into-title {
      margin: 50px auto 0px auto;
      text-align: center;
      font-size: 32px;
      color: #036EB8;
    }
    .to-change-into-qrcode {
      margin: 0px auto;
    }
    .transfer-into-bottom {
      margin: 0px auto;
      text-align: center;
      font-size:30px;
      color: #036EB8;
      img {
        width: 30px;
      }
    }
  }
</style>