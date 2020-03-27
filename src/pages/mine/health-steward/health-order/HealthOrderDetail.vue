<template>
  <div class="order-detail">
    <!-- 标题 -->
    <div class="service-title title">
      <span class="fl" v-on:click="$router.go(-1)"> <img src="../../../../assets/images/l.svg" alt=""> 订单详情</span>
      <router-link :to="{name:'ReservationInformation'}">
        <span class="fr"> <img src="../../../../assets/images/chain.svg" alt="" class="right-icon">预约信息</span>
      </router-link>
    </div>
    <!-- 名称及订单号 -->
    <div class="order-detail-cellname">
      <span>免疫细胞 - 存储10年</span>
      <p><span>订单号</span> <span @click="copyText" class="fr copy overflow-text tag-read"
          :data-clipboard-text="2564963">2564963
          <img src="../../../../assets/images/copy.svg" alt=""></span></p>
    </div>
    <!-- 状态 -->
    <!-- 待初审 -->
    <!-- <div class="order-status">
      <p>待初审</p>
      <span>请与代理商核实订单，并审核预约基本信息</span>
    </div> -->
    <!-- 待审核 -->
    <!-- <div class="order-status">
      <p>待审核</p>
      <span>等待专家审核受服务人信息</span>
    </div> -->
    <!-- 专家审核未通过 -->
    <!-- <div class="order-status">
      <p class="no-pass">专家审核未通过</p>
      <span>体检报告中病毒项呈阳性，不建议自体存储</span>
    </div> -->
    <!-- 待安排 -->
    <!-- <div class="order-status">
      <p>待安排</p>
      <span>安排用户的服务机构和服务时间</span>
    </div> -->
    <!-- 待确认 -->
    <!-- <div class="order-status">
      <p>待确认</p>
      <span>等待机构确认服务时间</span>
    </div> -->
    <!-- 服务中 -->
    <!-- <div class="order-status">
      <p>服务中</p>
      <span>请与用户再次确认服务时间</span>
    </div> -->
    <!-- 带传证 -->
    <!-- <div class="order-status">
      <p>带传证</p>
      <span>请上传受服务人证书</span>
    </div> -->
    <!-- 已完成 -->
    <!-- <div class="order-status">
      <p>已完成</p>
      <span>服务已完成</span>
    </div> -->
    <!-- 已取消 -->
    <div class="order-status">
      <p class="no-pass">已取消</p>
      <span>用户同意取消</span>
    </div>
    <mt-cell title="查看证书" to="report" is-link />
    <mt-cell title="服务时间" value="张三" to="serviced" />
    <mt-cell title="服务机构" value="已上传" to="report" />
    <mt-cell title="受服务人" value="张三" to="serviced" is-link />
    <mt-cell title="体检报告" value="已上传" to="report" is-link />
    <!-- 底部按钮--待初审 -->
    <!-- <div class="bottom-btn">
      <router-link :to="{name:'CancelOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">取消订单</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'UploadReport'}">
        <div class="right-btn fr">
          <van-button type="info">提交专家审核</van-button>
        </div>
      </router-link>
    </div> -->
    <!-- 底部按钮--待审核 -->
    <!-- <router-link to="healthorder">
      <div class="back-btn">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link> -->
    <!-- 底部按钮--专家审核未通过 -->
    <!-- <div class="bottom-btn">
      <div class="left-btn fl">
        <van-button plain type="primary">重新提交审核</van-button>
      </div>
      <router-link :to="{name:'CancelOrder'}">
        <div class="right-btn fr">
          <van-button type="info">取消订单</van-button>
        </div>
      </router-link>
    </div> -->
    <!-- 底部按钮--待安排 -->
    <!-- <div class="bottom-btn">
      <router-link :to="{name:'CancelOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">取消订单</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Arrangement'}">
        <div class="right-btn fr">
          <van-button type="info">安排</van-button>
        </div>
      </router-link>
    </div> -->
    <!-- 底部按钮--待确认-->
    <!-- <div class="bottom-btn">
      <router-link :to="{name:'CancelOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">取消订单</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Arrangement'}">
        <div class="right-btn fr">
          <van-button type="info">重新安排</van-button>
        </div>
      </router-link>
    </div> -->
    <!-- 底部按钮--服务中-->
    <!-- <div class="bottom-btn">
      <router-link :to="{name:'CancelOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Arrangement'}">
        <div class="right-btn fr">
          <van-button type="info">完成现场服务</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Arrangement'}">
        <div class="right-btn fr">
          <van-button type="info">重新安排时间</van-button>
        </div>
      </router-link>
    </div> -->
    <!-- 底部按钮--带传证-->
    <div class="bottom-btn">
      <router-link :to="{name:'CancelOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Arrangement'}">
        <div class="right-btn fr">
          <van-button type="info">上传证书</van-button>
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
      copyText() {
        copy()
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../../assets/scss/Global.scss";

  .order-detail {
    .order-status {
      background-color: #fff;
      margin: 20px 0;
      padding: 20px 20px;

      p {
        font-size: 34px;
        margin-bottom: 10px;
        font-weight: 700;
      }

      span {
        font-size: 26px;
        color: #036ED8;
      }

      .no-pass {
        color: #DA5C5C;
      }
    }
  }
</style>