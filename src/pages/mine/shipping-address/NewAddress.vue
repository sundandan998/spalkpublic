<template>
  <div class="newaddress">
    <div class="newaddress-text">
      <van-address-edit :area-list="areaList" show-set-default show-search-result @save="onSave" />
    </div>
    <!-- <router-link to="/address"> -->
    <router-link :to="{name:'ShippingAddress',params:{path:this.$route.params.path,id: this.$route.params.id}}">
      <div class="address-btn">
        <van-button square size="large" type="warning">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<script>
  import areaList from '@/assets/js/area.js'
  import { Toast } from 'mint-ui'
  import api from '@/api/user/User.js'
  export default {
    data() {
      return {
        areaList,
        searchResult: [],
      }
    },
    created() {
      document.title = '新建地址'
    },
    methods: {
      // 增加地址
      onSave(val) {
        api.addAddress(val).then(res => {
          if (res.code == 0) {
            this.$router.push({
              name: 'ShippingAddress',
              params: { id: this.$route.params.id, path: this.$route.params.path }
            })
            Toast({
              message: res.msg,
              position: 'top',
              className: 'zZindex'
            })
          }
        }).catch(err => {
          if (err.code != 0) {
            Toast({
              message: err.msg,
              position: 'top',
              className: 'zZindex'
            })
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  @import '../../../assets/scss/Global.scss';

  .van-address-edit__buttons .van-button {
    margin-bottom: 0px !important;
  }
</style>