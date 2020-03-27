<template>
  <div class="arrangement">
    <!-- 标题 -->
    <div class="service-title title">
      <span v-on:click="$router.go(-1)"> <img src="../../../../assets/images/l.svg" alt=""> 安排</span>
    </div>
    <!-- 服务机构 -->
    <mt-cell title="服务机构" value="张三" to="serviced" />
    <mt-field label="服务时间" @click.native="showPopup" placeholder="选择时间" v-model="arrangement.time">
    </mt-field>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-datetime-picker type="datetime" :min-date="minDate" @cancel="cancel" :max-date="maxDate"
        :formatter="formatter" @confirm="confirm" />
    </van-popup>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'CancelOrder'}">
        <div class="left-btn fl">
          <van-button plain type="primary">取消</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'HealthOrderDetail'}">
        <div class="right-btn fr">
          <van-button type="info">提交</van-button>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2035, 10, 1),
        currentDate: new Date(),
        show: false,
        arrangement: {
          time: ''
        }
      }
    },
    methods: {
      showPopup() {
        this.show = true
      },
      // 显示年月日文字
      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } else if (type === 'month') {
          return `${val}月`
        } else if (type === 'day') {
          return `${val}日`
        } else if (type === 'hour') {
          return `${val}时`
        } else if (type === 'minute') {
          return `${val}分`
        }
        return val;
      },
      confirm(value) {
        let time = value
        let times = time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日' + time.getHours() + '时' + time.getMinutes() + '分';
        this.arrangement.time = times
        this.show = false
      },
      cancel() {
        this.show = false
      }
    }
  }
</script>
<style lang="scss">
  @import "../../../../assets/scss/Global.scss";
</style>