<template>
  <div class="fill">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../../assets/images/l.svg" alt=""> 填写证书管理</span>
      </router-link>
    </div>
    <!-- 填写信息 -->
    <div class="fill-info">
      <div class="fill-info-time">
        <mt-field label="服务名称" placeholder="请输入用户所受服务" />
        <mt-field label="服务时间" @click.native="showPopup" placeholder="请选择服务时间" v-model="arrangement.time">
        </mt-field>
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
          <van-datetime-picker type="datetime" :min-date="minDate" @cancel="cancel" :max-date="maxDate"
            :formatter="formatter" @confirm="confirm" />
        </van-popup>
      </div>
      <div class="fill-info-name">
        <mt-field label="姓名" placeholder="请填写受服务人姓名" />
        <mt-field label="手机号" placeholder="请填写受服务人手机号" type="tel" />
        <mt-field label="身份证号" placeholder="请填写受服务人身份证号" type="tel" />
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <router-link :to="{name:'CertificateManagement'}">
        <div class="left-btn fl">
          <van-button plain type="primary">取消</van-button>
        </div>
      </router-link>
      <router-link :to="{name:'UploadInformation'}">
        <div class="right-btn fr">
          <van-button type="info">下一步</van-button>
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
  .fill{
    .fill-info-time{
      margin:1px 0 10px 0;
    }
  }
</style>