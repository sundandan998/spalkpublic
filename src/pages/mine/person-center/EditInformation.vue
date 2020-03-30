<template>
  <div class="person-center backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'PersonCenter'}">
        <span> <img src="../../../assets/images/l.svg" alt=""> 修改个人信息</span>
      </router-link>
    </div>
    <div class="person-info">
      <mt-field label="姓名"  placeholder="请输入姓名"v-model="modifyParams.name">
      </mt-field>
      <mt-field label="手机号" :placeholder="this.$route.params.mobile" readonly></mt-field>
      <mt-field label="身份证号" placeholder="请输入身份证号" v-model="modifyParams.id_card"></mt-field>
      <mt-field label="常住地址" placeholder="省市区县、乡镇等" @click.native="showPop" v-model="this.$route.params.country"/>
      <mt-field placeholder="街道、楼牌号等"v-model="modifyParams.addressDetail"/>
      <van-popup v-model="show" position="bottom"  :style="{ height: '50%' }">
        <van-area :area-list="areaList" @cancel="cancel" @confirm="confirm" />
      </van-popup>
      <mt-field label="邀请人" placeholder="请输入邀请人的邀请码" v-model="modifyParams.invite_code"></mt-field>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link to="personcenter">
        <div class="left-btn fl">
          <van-button plain type="primary">取消</van-button>
        </div>
      </router-link>
      <div class="right-btn fr" @click="save">
        <van-button type="info" :disabled="disabled">保存</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '@/api/user/User.js'
  import areaList from '@/assets/js/area'
  import { cancel } from '@/assets/js/common.js'
  export default {
    data() {
      return {
        // 按钮禁用
        disabled: true,
        // 地址模态框
        show: false,
        // 地区列表
        areaList,
        // 修改参数
        address:'',
        modifyParams: {
          name: '',
          id_card: '',
          province: '',
          city: '',
          county: '',
          addressDetail: '',
          invite_code: ''
        },
      }
    },
    created() {
      document.title = '斯帕尔克'
      this.modifyParams = this.$route.params.info
    },
    methods: {
      // 复制
      copyText() {
        copy()
      },
      // 模态框展示
      showPop() {
        this.show = true
      },
      // 取消
      cancel(){
        this.show=false
      },
      confirm(value){
        this.modifyParams.province = value[0].name
        this.modifyParams.city = value[1].name
        this.modifyParams.county = value[2].name
        this.address = this.modifyParams.province+' '+this.modifyParams.city+' '+this.modifyParams.county
        this.show=false
      },
      // 保存
      save() {
        api.modifyInfo(this.modifyParams).then(res=>{
          if(res.code==0){
            this.$router.push({
              name:'PersonCenter'
            })
          }
        }).catch(err=>{
        })
      }
    },
    watch: {
      modifyParams: {
        immediate: true,
        deep: true,
        handler(val) {
          if (val.name && val.id_card && val.province && val.city && val.county && val.addressDetail != '') {
            this.disabled = false
          } else {
            this.disabled = true
          }
        }
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