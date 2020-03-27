<template>
  <div class="my-scores">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link to="mine">
        <span class="fl"> <img src="../../../assets/images/l.svg" alt=""> 我的账户</span>
      </router-link>
      <span class="fr">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img slot="icon" src="../../../assets/images/gd.svg">
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <router-link to="/scan"> -->
            <el-dropdown-item>扫一扫</el-dropdown-item>
            <!-- </router-link> -->
            <!-- <router-link :to="{name:'Out',params:{min_limit:this.assetsToken.min_limit}}"> -->
            <el-dropdown-item>
              <router-link :to="{name:'PointsDetails'}">
                <span>明 细</span>
              </router-link>
            </el-dropdown-item>
            <!-- </router-link> -->
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <!-- 账户余额 -->
    <div class="scores-balance">
      <span>积分余额</span>
      <p>2000 积分</p>
    </div>
    <!-- 底部按钮 -->
    <div class="scores-btn">
      <router-link :to="{name:'TransferInto'}">
        <div class="into-btn fl">
          <van-button type="default">转入</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'TransferOut'}">
        <div class="out-btn fr">
          <van-button type="info">转出</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../../assets/scss/Global.scss";

  .el-dropdown-menu__item {
    font-size: 26px;
  }

  .my-scores {

    .scores-balance {
      background-color: #fff;

      span {
        margin-left: 25px;
        font-size: 28px;
        color: #a1a1a1;
        padding-top: 10px;
        display: block;
      }

      p {
        margin: 20px 0 0 25px;
        padding-bottom: 20px;
        font-size: 34px;
        color: #036EB8;
      }
    }
  }
</style>