<template>
  <div class="page">
    <v-header></v-header>
    <v-tab :currentPage="currentPage"></v-tab>
    <my-swiper :list="bannerList"></my-swiper>
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul class="list-container">
        <li
          @click="selectItem(item)"
          v-for="(item,index) in recommendList"
          class="item"
          :key="index"
        >
          <div class="icon">
            <img :src="item.picUrl" mode="widthFix"/>
          </div>
          <div class="text">
            <h2 class="name">{{item.name}}</h2>
            <!-- <p class="desc" v-html="item.dissname"></p> -->
          </div>
        </li>
      </ul>
    </div>
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
      currentPage: "recommend",
      bannerList: [],
      recommendList: []
    };
  },
  onLoad() {
    this.getBannerList();
    this.getRecommendList();
  },
  methods: {
    getBannerList() {
      uni.request({
        url: "http://localhost:3000/banner",
        data: {
          // text: "uni.request"
        },
        header: {
          "custom-header": "hello" //自定义请求头信息
        },
        success: res => {
          if (res.data.code == 200) {
            this.bannerList = res.data.banners;
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
    },
    getRecommendList() {
      uni.request({
        url: "http://localhost:3000/personalized?limit=9",
        data: {
          text: "uni.request"
        },
        header: {
          "custom-header": "hello" //自定义请求头信息
        },
        success: res => {
          if (res.data.code == 200) {
            this.recommendList = res.data.result;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
.page {
  text-align: center;
  .recommend-list {
    .list-title {
      line-height: 90upx;
      text-align: left;
      padding-top: 40upx;
      padding-left: 15upx;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .list-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        width: 33%;
        margin: 5upx 0 30upx;
        .icon {
          image {
            display: block;
            width: 100%;
            height: 120upx; 
          }
        }
        .text {
          font-size: $font-size-small;
          text-align: left;
          word-break: break-all;
          word-wrap: break-word;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          padding: 12upx 4upx 0 12upx;
          .name {
            color: $color-text-l;
          }
          .desc {
            color: $color-text-d;
          }
        }
      }
    }
  }
}
</style>
