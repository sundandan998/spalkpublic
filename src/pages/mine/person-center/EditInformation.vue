<template>
  <div class="person-center backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'PersonCenter'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 修改个人信息</span>
      </router-link>
    </div>
    <div class="person-info">
      <mt-field label="姓名" placeholder="请输入用户名" ></mt-field>
      <mt-field label="手机号" placeholder="165165" readonly></mt-field>
      <mt-field label="身份证号" placeholder="请输入用户名" ></mt-field>
      <mt-field label="常住地址" placeholder="请输入用户名" ></mt-field>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <div class="left-btn fl">
        <van-button plain type="primary">取消</van-button>
      </div>
      <router-link :to="{name:'PersonCenter'}">
        <div class="right-btn fr">
          <van-button type="info">保存</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    created() {
      // document.title = '资产中心'
    },
    methods: {
      copyText() {
        copy()
      }
    }
  }
</script>
<style lang="scss">
  @import '../../../assets/scss/Global.scss';

  .person-center {
    .person-info {
      img {
        width: 30px;
      }
    }
  }
</style>