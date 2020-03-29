<template>
  <div class="service-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'ServiceOrder'}">
        <span> <img src="../../../../assets/images/l.svg" alt=""> 订单详情</span>
      </router-link>
    </div>
    <div class="service-cell-name">
      <p>IC-10_免疫细胞存储10年</p>
      <mt-cell title="订单编号">
        <span @click="copyText" class="copy overflow-text tag-read" :data-clipboard-text="18665156">18665156 <img
            src="../../../../assets/images/copy.svg" alt=""> </span>
      </mt-cell>
      <mt-cell title="预约时间" value="2021588" />
    </div>
    <div class="service-status">
      <p>xxx</p>
    </div>
    <div class="service-time">
      <mt-cell title="服务时间" value="2021588" />
      <mt-cell title="受服务人" value="2021588" />
      <mt-cell title="体检报告" value="2021588" is-link />
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'ServiceOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Mine'}">
        <div class="right-btn fr">
          <van-button type="info">确认</van-button>
        </div>
      </router-link>
    </div>
    <div class="bottom-btn">
      <div class="left-btn fl" @click="change">
        <van-button plain type="primary">允许变更</van-button>
      </div>
      <router-link :to="{name:'ServiceOrder'}">
        <div class="right-btn fr">
          <van-button type="info">返回</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  // 复制方法
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
      change(){
        this.$messagebox({
          title: '允许变更',
          message: '订单将由管家重新安排服务时间',
          cancelButtonText: '我在想想',
          confirmButtonText: '确定允许',
          showCancelButton: true
        }).then(action => {
          if (action === 'confirm') {
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  @import '../../../../assets/scss/Global.scss';

  .service-detail {
    .service-cell-name {
      background-color: #fff;

      p {
        padding: 20px;
        font-size: 28px;
      }

      img {
        width: 30px;
      }
    }

    .service-status {
      background-color: #fff;
      margin: 20px 0;
      height: 80px;
      line-height: 80px;
      padding-left: 20px;
      font-size: 28px;
    }
  }
</style>