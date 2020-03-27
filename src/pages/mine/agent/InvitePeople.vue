<template>
  <div class="invite-people backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 邀请管理</span>
      </router-link>
    </div>
    <div class="invitation-code">
      <span class="text">您的邀请码</span>
      <p class="code">{{1561656}}</p>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'Mine'}">
        <div class="left-btn fl">
          <van-button plain type="primary">返回</van-button>
        </div>
      </router-link>
      <div @click="copyText" class=" right-btn fr copy overflow-text tag-read" :data-clipboard-text="18665156">
        <van-button type="info"> 复制邀请码</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import { copy } from '@/assets/js/common.js'
  import { Toast } from 'mint-ui'
  export default {
    data() {
      return {
        invite_code: '',
        recentlyList: [],
      }
    },
    created() {
      document.title = '邀请新人'
      // this.code()
    },
    methods: {
      // 获取验证码
      code() {
        api.code().then(res => {
          this.invite_code = res.invite_code
        }).catch(err => {

        })
      },
      // 复制
      copyText() {
        copy()
      }
    }
  }
</script>
<style lang="scss">
  @import '../../../assets/scss/Global.scss';

  .invite-people {
    .invitation-code {
      background-color: #fff;
      text-align: center;
      color: #333;
      margin-top: 50px;
      .text {
        display: block;
        font-size: 28px;
      }

      .code {
        font-size: 70px;
        margin-top: 25px;
      }

      .van-button--default {
        border: none;
      }

      .inviteCode {
        width: 100px;
        height: 50px;
        border: 1px solid #ce0101;
        color: #ce0101;
        line-height: 50px;
        margin-top: 25px;
        border-radius: 8px;
        font-size: 28px;
      }
    }

    /* 邀请记录列表 */
    .invitation-list-title {
      margin: 10px 24px;

      .mint-cell {
        border-radius: 10px;
      }
    }

    .invitation-list {
      margin: 10px 24px;

      .mint-cell-value {
        span {
          color: #ce0101;
        }
      }
    }

    .invitation-list .invitation-list-tel:first-child .mint-cell {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .mint-cell:last-child {
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    /* 全部 */
    .all {
      text-align: center;
      font-size: 24px;
    }
  }
</style>