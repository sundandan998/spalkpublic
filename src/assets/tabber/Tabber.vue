<template>
  <mt-tabbar :selected.sync="message" fixed>
    <mt-tab-item id="index" @click.native="index">
      <img slot="icon" src="../../assets/images/reservation-active.svg" v-if="message == 'index'" />
      <img slot="icon" src="../../assets/images/reservation.svg" v-else />
      <font :class="message === 'index' ? 'color' : ''">预约</font>
    </mt-tab-item>
    <!-- <mt-tab-item id="member" @click.native="member">
      <img slot="icon" src="../../assets/images/member-active.svg" v-if="message == 'member'" />
      <img slot="icon" src="../../assets/images/member.svg" v-else />
      <font :class="message === 'member' ? 'color' : ''">会员日</font>
    </mt-tab-item> -->
    <mt-tab-item id="mine" @click.native="mine">
      <img slot="icon" src="../../assets/images/mine-active.svg" v-if="message == 'mine'" />
      <img slot="icon" src="../../assets/images/mine.svg" v-else />
      <font :class="message === 'mine' ? 'color' : ''">我的</font>
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    props: {
      message: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {
      index() {
        this.$router.push({
          // name: 'Index'
          name: 'Index'
        })
      },
      // member() {
      //   this.$router.push({
      //     name: 'MemberDayStart'
      //   })
      // },
      
      mine() {
        if (this.$store.getters.token !== '') {
          this.$router.push({
            name: 'Mine'
          })
        } else {
          this.$router.push({
            name: 'Register'
          })
        }
      },
    }
  }
</script>
<style>
  .color {
    color: #036EB8;
  }
</style>