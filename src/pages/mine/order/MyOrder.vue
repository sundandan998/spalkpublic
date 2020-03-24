<template>
  <div class="my-order">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link to="mine">
        <span> <img src="../../../assets/images/l.svg" alt=""> 我的订单 </span>
      </router-link>
    </div>
    <div class="my-order-tabs">
      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="100" -->
      <!-- :error.sync="error" error-text="请求失败，点击重新加载"> -->
      <!-- @click="index" -->
      <van-tabs v-model="active" title-active-color="#1890FF">
        <van-tab title="全部">
          <div class="product">
            <router-link :to="{name:'OrderDetail'}">
              <div class="service-cell">
                <div class="cell-img fl">
                  <img src="../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="免疫细胞">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>1616165</span>
                    </div>
                    <div class="name">
                      <span>张三</span> <span>1651565</span>
                    </div>
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="待完善">
          <div class="product">
            <router-link :to="{name:'OrderDetail'}">
              <div class="service-cell">
                <div class="cell-img fl">
                  <img src="../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="免疫细胞">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>1616165</span>
                    </div>
                    <!-- <div class="name">
                      <span>张三</span> <span>1651565</span>
                    </div> -->
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="待受理">
          <div class="product">
            <router-link :to="{name:'OrderDetail'}">
              <div class="service-cell">
                <div class="cell-img fl">
                  <img src="../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="免疫细胞">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>1616165</span>
                    </div>
                    <div class="name">
                      <span>张三</span> <span>1651565</span>
                    </div>
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="待服务">
          <div class="product">
            <router-link :to="{name:'OrderDetail'}">
              <div class="service-cell">
                <div class="cell-img fl">
                  <img src="../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="免疫细胞">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>1616165</span>
                    </div>
                    <div class="name">
                      <span>张三</span> <span>1651565</span>
                    </div>
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="product">
            <router-link :to="{name:'OrderDetail'}">
              <div class="service-cell">
                <div class="cell-img fl">
                  <img src="../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="免疫细胞">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>1616165</span>
                    </div>
                    <div class="name">
                      <span>张三</span> <span>1651565</span>
                    </div>
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="已取消">
          <div class="product">
            <router-link :to="{name:'OrderDetail'}">
              <div class="service-cell">
                <div class="cell-img fl">
                  <img src="../../../assets/images/cell.jpg" alt="">
                </div>
                <van-card class="index-list-card fr" title="免疫细胞">
                  <div class="index-list-text" slot="tags">
                    <div class="label">
                      <span>1616165</span>
                    </div>
                    <div class="name">
                      <span>张三</span> <span>1651565</span>
                    </div>
                    <span class="fr order-status">待完善</span>
                  </div>
                </van-card>
              </div>
            </router-link>
            <div class="no-data">
              <p>暂无数据</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
      <!-- </van-list> -->
    </div>
    <router-link to="mine">
      <div class="order-button">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<script>
  // 接口请求
  export default {
    data() {
      return {
        active: 0,
        // 上拉加载
        loading: false,
        finished: false,
        error: false,
        pageNum: 1,
      }
    },
    created() {
      document.title = '我的订单'
    },
    methods: {
      // 上拉加载
      // onLoad() {
      //   setTimeout(() => {
      //     this.order.page = this.pageNum
      //     api.merchantOrder(this.order).then(res => {
      //       if (res.code == 0) {
      //         this.orderList.push.apply(this.orderList, res.data)
      //         this.loading = false
      //         if (res.has_next == true) {
      //           // this.loading = true
      //           this.pageNum++
      //         }
      //         if (res.has_next == false) {
      //           this.finished = true
      //           this.loading = false
      //         }
      //       }
      //     }).catch(err => {
      //       this.error = true
      //     })
      //   }, 100)
      // },
      // tab栏展示列表
      // index(index, title) {
      // },
    }
  }
</script>
<style lang="scss">
  @import '../../../assets/scss/Global.scss';

  .my-order {
    .my-order-tabs {
      .name {
        margin-top: 20px;
        color: #333;
        font-size: 26px;
      }

      .order-status {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 28px;
      }
    }

    .order-button {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>