<template>
  <div class="person-center backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 个人信息</span>
      </router-link>
    </div>
    <div class="person-info">
      <mt-cell title="姓名" :value="this.infoData.name" v-if="this.infoData.name!=null" />
      <mt-cell title="姓名" value="暂无" v-if="this.infoData.name==null" />
      <mt-cell title="手机号">
        <span @click="copyText" class="copy overflow-text tag-read" :data-clipboard-text="this.tel">{{this.tel}} <img
            src="../../../assets/images/copy.svg" alt=""> </span>
      </mt-cell>
      <mt-cell title="身份证号" :value="this.infoData.id_card" v-if="this.infoData.id_card!=null" />
      <mt-cell title="身份证号" value="暂无" v-if="this.infoData.id_card==null" />
      <mt-cell title="常住地址" :value="this.address" v-if="this.infoData.name!=null" class="address-details" />
      <mt-cell title="常住地址" value="暂无" v-if="this.infoData.name==null" />
      <mt-cell title="我的邀请人" :value="this.infoData.invite_code" v-if="this.infoData.province!=null" />
      <mt-cell title="我的邀请人" value="暂无" v-if="this.infoData.province==null" />
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'EditInformation',params:{mobile:this.tel,info:this.infoData,country:this.country}}">
        <div class="left-btn fl">
          <van-button plain type="primary">修改</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'Mine'}">
        <div class="right-btn fr">
          <van-button type="info">返回</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import api from '@/api/user/User.js'
  // 复制方法
  import { copy } from '@/assets/js/common.js'
  export default {
    data() {
      return {
        infoData: {},
        tel: '',
        address: '',
        country: ''
      }
    },
    created() {
      document.title = '斯帕尔克'
      this.userInfo()
      this.info()
    },
    methods: {
      // 复制方法
      copyText() {
        copy()
      },
      // 获取用户信息
      userInfo() {
        api.information({ mobile: this.$route.params.mobile }).then(res => {
          this.infoData = res.data.info
          // 拼接详细地址
          this.address = res.data.info.province + '' + res.data.info.county + '' + res.data.info.addressDetail
          // 拼接省市
          this.country = res.data.info.province + '' + res.data.info.county
        }).catch()
      },
      // 取localstorage中电话
      info() {
        let info = JSON.parse(localStorage.getItem("userInfo"))
        this.tel = info.data.mobile
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

      .address-details {
        span {
          width: 450px;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
    }
  }
</style>