<template>
  <div class="page">
    <v-header></v-header>
    <v-tab :currentPage="currentPage"></v-tab>
    <div>singer</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      currentPage: 'singer',
      singerList: []
    };
  },
  onLoad() {
    this.getSingerList();
  },
  methods: {
    getSingerList() {
      uni.request({
        url:
          "http://localhost:3000/top/artists",
        data: {
          // text: "uni.request"
        },
        header: {
          "custom-header": "hello" //自定义请求头信息
        },
        success: res => {
          console.log(res.data.code)
          if (res.data.code == 200) {
            this.singerList = res.data.artists;
            console.log(res.data.artists)
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
