<template>
  <div class="upload backcolor">
    <!-- 标题 -->
    <div class="service-title title">
      <router-link :to="{name:'Mine'}">
        <span> <img src="../../../../assets/images/l.svg" alt=""> 上传证书</span>
      </router-link>
    </div>
    <div class="upload-file">
      <span><img src="../../../../assets/images/upfile.svg" alt=""> 上传文件</span>
      <p>仅支持PDF文件，大小不超过10M</p>
    </div>
    <!-- 底部按钮-->
    <router-link to="fillformation">
      <div class="back-btn">
        <van-button type="info" size="large">返回</van-button>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss">
  @import "../../../../assets/scss/Global.scss";

  .upload {
    .upload-file {
      margin: 250px auto;
      text-align: center;

      p {
        font-size: 28px;
        color: #a1a1a1;
      }

      span {
        border: 1px solid #a1a1a1;
        color: #a1a1a1;
        width: 200px;
        height: 80px;
        display: block;
        margin: 0 auto 20px auto;
        border-radius: 10px;
        line-height: 80px;
        img{
          position: relative;
          top:10px;
          width: 40px;
          margin-right: 10px;
        }
      }
    }
  }
</style>