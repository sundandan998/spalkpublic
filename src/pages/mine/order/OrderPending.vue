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
      <p><span>订单号</span> <span @click="copyText" class="fr copy overflow-text tag-read"
          :data-clipboard-text="2564963">2564963
          <img src="../../../assets/images/copy.svg" alt=""></span></p>
    </div>
    <!-- 步骤条 -->
    <!-- 订单状态待受理 -->
    <div class="order-pending" v-if="active==0">
      <div class="order-detail-step">
        <el-steps :active=active class="order-detail-step-text">
          <el-step title="待受理" description="管家将会安排服务机构及服务时间"></el-step>
          <el-step title="服务中"></el-step>
          <el-step title="已完成"></el-step>
        </el-steps>
      </div>
      <div class="order-detail-infor">
        <mt-cell title="受服务人" value="张三" to="serviced" is-link />
        <mt-cell title="体检报告" value="已上传" to="report" is-link />
      </div>
    </div>
    <!-- 订单状态服务中 -->
    <div class="order-serving" v-if="active==1">
      <div class="order-detail-step">
        <el-steps :active=active class="order-detail-step-text">
          <el-step title="待受理"></el-step>
          <el-step title="服务中" description="现场服务及制作证书"></el-step>
          <el-step title="已完成"></el-step>
        </el-steps>
      </div>
      <div class="order-detail-infor">
        <div class="service-time">
          <mt-cell title="服务时间" value="201111" />
          <mt-cell title="服务地址" value="201111" />
        </div>
        <mt-cell title="受服务人" value="张三" to="serviced" is-link />
        <mt-cell title="体检报告" value="已上传" to="report" is-link />
      </div>
    </div>
    <!-- 订单状态--已完成 -->
    <div class="order-completed" v-if="active==2">
      <div class="order-detail-step">
        <el-steps :active=active class="order-detail-step-text">
          <el-step title="待受理"></el-step>
          <el-step title="服务中"></el-step>
          <el-step title="已完成" description="服务完成"></el-step>
        </el-steps>
      </div>
      <div class="order-detail-infor">
        <div class="service-time">
          <mt-cell title="查看证书" to="" is-link />
        </div>
        <div class="service-time">
          <mt-cell title="服务时间" value="201111" />
          <mt-cell title="服务地址" value="201111" />
        </div>
        <mt-cell title="受服务人" value="张三" to="serviced" is-link />
        <mt-cell title="体检报告" value="已上传" to="report" is-link />
      </div>
    </div>
    <!-- 订单状态--已取消 -->
    <div class="order-cancel">
      <div class="order-detail-step">
        <img src="../../../assets/images/cancel.svg" alt=""> <span class="cancel-text">已取消</span>
        <p class="cancel-reason">水电费</p>
      </div>
      <div class="order-detail-infor">
        <div class="service-time">
          <mt-cell title="服务时间" value="201111" />
          <mt-cell title="服务地址" value="201111" />
        </div>
        <mt-cell title="受服务人" value="张三" to="serviced" is-link />
        <mt-cell title="体检报告" value="已上传" to="report" is-link />
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <div class="left-btn fl" @click="service">
        <img src="../../../assets/images/ministry.svg" alt="">
      </div>
      <router-link :to="{name:'UploadReport'}">
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
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        active: 3,
      }
    },
    created() {
    },
    methods: {
      // 复制功能
      copyText() {
        copy()
      },
      copynum() {
        copy()
        // console.log('79')
      },
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
            // this.copyText()
            console.log(this.message)
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .order-detail {
    .order-detail-step {
      background-color: #fff;
      margin: 20px auto;

      .order-detail-step-text {
        padding: 50px 0 30px 0;
        margin-left: 20px;

        .el-step__icon.is-text {
          font-size: 32px;
          border: none;
          padding: 10px 50px 0 50px;
        }

        .el-step__title {
          font-size: 28px;
          margin: 20px;
        }

        .el-step__description {
          font-size: 28px;
          width: 100%;
          line-height: 35px;
        }
      }
    }

    .order-detail-infor {
      .service-time {
        margin: 20px 0;
      }
    }

    .order-cancel {
      img {
        width: 50px;
        padding: 40px 10px 10px 20px;
      }

      .cancel-text {
        position: relative;
        top: -20px;
        font-size: 28px;
        color: #DE273D;
        font-weight: 700;
      }

      .cancel-reason {
        margin: 0 30px;
        padding-bottom: 20px;
        font-size: 28px;
        color: #036EB8;
      }
    }
  }
</style>