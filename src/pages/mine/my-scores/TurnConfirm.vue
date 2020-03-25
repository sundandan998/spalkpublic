<template>
  <div class="turn-confirm">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'TransferOut'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 转出确认</span>
      </router-link>
    </div>
    <div class="turn-prompt">
      <span>请仔细核实转出信息，转出成功后积分无法返还</span>
    </div>
    <mt-cell title="收款人姓名" value="张三" />
    <mt-cell title="收款人账号" value="5615" />
    <mt-cell title="转出数量" value="1615" />
    <mt-cell title="手续费" value="推广期暂无" />
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'TransferOut'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'TurnResult'}">
        <div class="right-btn fr">
          <van-button type="info">确认</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";
  .turn-confirm{
    .turn-prompt{
      height: 80px;
      display: block;
      background-color: #FFEED6;
      color:#F44F00;
      line-height:80px;
      font-size:26px;
      padding-left: 20px;
    }
  }
</style>