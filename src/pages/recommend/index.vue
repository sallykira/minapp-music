<template>
  <div class="page">
    <v-header></v-header>
    <v-tab :currentPage="currentPage"></v-tab>
    <my-swiper :list="bannerList"></my-swiper>
  </div>
</template>

<script>
import MySwiper from "../../components/swiper/index";
import axios from "axios";

export default {
  components: {
    MySwiper
  },
  data() {
    return {
      currentPage: 'recommend',
      bannerList: []
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    getList() {
      uni.request({
          url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
          data: {
              text: 'uni.request'
          },
          header: {
              'custom-header': 'hello' //自定义请求头信息
          },
          success: (res) => {
              if(res.data.code == 0){
                this.bannerList = res.data.data.slider
              }
          }
      });
      // let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      // axios.get(url)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  text-align: center;
}
</style>
