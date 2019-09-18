<template>
  <div class="page">
    <v-header></v-header>
    <v-tab :currentPage="currentPage"></v-tab>
    <div>search</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      currentPage: 'search'
    };
  },
  onLoad() {
    // this.getList();
  },
  methods: {
    getToplist() {
      uni.request({
        url:
          "http://localhost:3000/toplist/detail",
        data: {
          // text: "uni.request"
        },
        header: {
          "custom-header": "hello" //自定义请求头信息
        },
        success: res => {
          console.log(res)
          if (res.data.code == 200) {
            this.topList = res.data.list;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
