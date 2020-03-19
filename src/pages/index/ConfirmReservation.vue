<template>
  <div class="confirm-reservation">
    <!-- 标题 -->
    <div class="service-title title">
      <span> <img src="../../assets/images/l.svg" alt=""> 确认预约信息</span>
    </div>
    <!-- 细胞名称 -->
    <div class="service-cell">
      <div class="cell-img fl">
        <img src="../../assets/images/cell.jpg" alt="">
      </div>
      <van-card class="index-list-card fr" title="免疫细胞">
        <div class="index-list-text" slot="tags">
          <div class="label">
            <span>防御 |</span>
            <span>监控 |</span>
            <span>清洁</span>
          </div>
          <div class="price">
            <span>3966积分</span>
          </div>
        </div>
      </van-card>
    </div>
    <!-- 步骤条 -->
    <div class="confirm-step">
      <p><span>福豆</span> 剩余200福豆</p>
      <div class="confirm-stepper">
        <van-stepper v-model="amount" step="1000" input-width="80%" button-size="42px" />
      </div>
      <span class="fd-description">将使用10000福豆，抵扣1积分</span>
    </div>
    <!-- 底部按钮 -->
    <div class="pay-btn">
      <div class="fl pay-integral">
        <p>实付 : <span>666 积分</span></p>
      </div>
      <div class="right-btn fr" @click="pay">
        <van-button type="info">下一步</van-button>
      </div>
    </div>
    <!-- 数字键盘 -->
    <!-- 数字键盘 -->
    <div>
      <van-popup class="popupbox" position="bottom" v-model="popupVisible">
        <span class="paymentamount">666积分</span>
        <van-password-input :value="value" @focus="showKeyboard = true" />
        <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" delete-button-text="Delete"
          @blur="showKeyboard = false" />
      </van-popup>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        amount: 1000,
        value:'',
        popupVisible: false,
        showKeyboard: false,
      }
    },
    created() {

    },
    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6)
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1)
      },
      pay(){
        this.value= ''
        this.popupVisible=true
        this.showKeyboard = true
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .confirm-reservation {
    .confirm-step {
      background-color: #fff;

      p {
        padding-top: 40px;
        overflow: hidden;
        margin: 0 0 20px 20px;
        color: #a1a1a1;

        span {
          font-size: 32px;
          color: #036EB8;
        }
      }

      .confirm-stepper {
        margin: 0 0 20px 20px;
      }

      .fd-description {
        margin: 0 0 20px 20px;
        color: #a1a1a1;
      }
    }

    .pay-btn {
      position: fixed;
      bottom: 0;
      width: 100%;

      .pay-integral {
        width: 45%;
        height: 80px;
        line-height: 80px;
        margin-left: 20px;
        font-size: 32px;

        span {
          color: #F05246;
        }
      }

      .right-btn {
        width: 50%;
        margin-right: 10px;

        button {
          border-radius: 50px;
        }
      }
    }
  }
</style>