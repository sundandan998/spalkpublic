<template>
  <div class="index">
    <!-- 标题 -->
    <div class="index-title">
      <span><img src="../../assets/images/service.svg" alt="">请选择服务</span>
    </div>
    <!-- 服务列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="100"
      :error.sync="error" error-text="请求失败，点击重新加载">
      <div class="index-list service-cell" v-for="item in list">
        <div class="cell-img fl">
          <img :src="item.icon" alt="">
        </div>
        <router-link :to="{name:'SelectService',params:{id:item.id,url:'index'}}">
          <van-card class="index-list-card fr" :title="item.name">
            <div class="index-list-text" slot="tags">
              <div class="label" v-for="list in item.labels" >
                <span>{{list}} |</span>
              </div>
              <div slot="footer" class="look-detail">
                <router-link :to="{name:'Detail',params:{id:item.id}}">
                  <van-button size="small">查看详情</van-button>
                </router-link>
                <img src="../../assets/images/rightarrow.png" alt="" class="fr right-arrow">
              </div>
            </div>
          </van-card>
        </router-link>
      </div>
    </van-list>
    <!-- 底部tabber -->
    <div>
      <tabber :message="selected"></tabber>
    </div>
  </div>
</template>
<script>
  import Tabber from '../../assets/tabber/Tabber.vue'
  import { Toast } from 'mint-ui'
  import api from '@/api/service/Service.js'
  export default {
    data() {
      return {
        selected: 'index',
        message: 'index',
        loading: false,
        finished: false,
        error: false,
        pageNum:{
          page:'1',
          page_size:'5'
        },
        list:[],
      }
    },
    created() {
      document.title = '斯帕尔克'
    },
    components: {
      Tabber,
    },
    methods: {
      // 上拉加载
      onLoad() {
        setTimeout(() => {
          api.serviceList(this.pageNum).then(res => {
            if (res.code == 0) {
              this.list = res.data
              // console.log(this.)
              // this.list.push.apply(this.list, res.data)
              this.loading = false
              if (res.has_next == true) {
                this.pageNum++
              }
              if (res.has_next == false) {
                this.finished = true
                this.loading = false
              }
            }
          }).catch(err => {
            this.error = true
          })
        }, 100)
      },
    },
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";
  .index {
    .index-title {
      background-color: #fff;
      span {
        font-size: 36px;
        color: #036EB8;
        display: block;
        margin: 0 0 1px 20px;
        height: 80px;
        line-height: 80px;
      }

      img {
        position: relative;
        top: 12px;
        margin-right: 10px;
      }
    }

    .index-list {
      background-color: #fff !important;
      height: 250px;
      margin-bottom: 20px;
    }
  }
</style>