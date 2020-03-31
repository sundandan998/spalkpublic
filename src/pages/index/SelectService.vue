<template>
  <div class="select-service backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <span class="fl" @click="back"> <img src="../../assets/images/l.svg" alt=""> 预约服务</span>
      <span class="fr" @click="service"> <img src="../../assets/images/ministry.svg" alt="" class="right-icon"></span>
    </div>
    <!-- 细胞名称 -->
    <div class="service-cell">
      <div class="cell-img fl">
        <img :src="category.icon" alt="">
      </div>
      <van-card class="index-list-card fr" :title="category.name">
        <div class="index-list-text" slot="tags">
          <div class="label" v-for="item in category.labels">
            <span>{{item}} |</span>
          </div>
          <div class="price">
            <span>{{this.integral}}</span>
          </div>
        </div>
      </van-card>
    </div>
    <!-- 服务规格 -->
    <div class="service-specification">
      <span>服务规格</span>
      <div v-for="(item,index) in services">
        <p @click="select(item,index)" :class="{active:categoryIndex==index}">{{item.name}}</p>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <!-- <router-link :to="{name:'Index'}"> -->
      <div class="left-btn fl" @click="back">
        <van-button plain type="primary">返回</van-button>
      </div>
      <!-- </router-link> -->
      <router-link :to="{name:'ConfirmReservation'}">
        <div class="right-btn fr">
          <van-button type="info">下一步</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import { copy } from '@/assets/js/common.js'
  import api from '@/api/service/Service.js'
  export default {
    data() {
      return {
        services: '',
        category: '',
        // 积分
        integral:'',
        categoryIndex: 0,
      }
    },
    created() {
      this.reservation()
    },
    methods: {
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
            // copyTel()
            // api.delAdress(this.$route.params).then(res => {
            // 	toast(res)
            // 	this.$router.push({
            // 		name: 'Book'
            // 	})
            // }).catch(err => {
            // 	toast(err)
            // })
          }
        })
      },
      reservation() {
        api.reservation({ category_id: this.$route.params.id }).then(res => {
          this.category = res.data.category
          this.services = res.data.services
        }).catch(err => {

        })
      },
      // 根据路径返回
      back() {
        if (this.$route.params.url == 'index') {
          this.$router.push({
            name: 'Index'
          })
        } else if (this.$route.params.url == 'detail') {
          this.$router.push({
            name: 'Detail',
            params: { id: this.$route.params.id }
          })
        }
      },
      select(item,index){
        this.categoryIndex = index
        this.category.name = item.name
        this.integral = item.price
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/scss/Global.scss";

  .select-service {

    .service-specification {
      background-color: #fff;

      span {
        margin: 40px 0 20px 20px;
        display: inline-block;
        font-size: 30px;
        color: #036EB8;
      }

      p {
        margin: 30px;
        border: 1px solid #036EB8;
        padding: 10px 10px;
        font-size: 26px;
        border-radius: 10px;
        width: 50%;
        text-align: center;
        color:#036EB8;
      }
      .active{
        background-color: #036EB8;
        color:#fff;
      }
    }

  }
</style>