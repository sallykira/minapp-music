<template>
  <div class="swiper-container">
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :indicator-color="indicatorColor"
      :indicator-active-color="indicatorActiveColor"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="(item,index) in list" :key="index">
        <div class="swiper-item" @click="goWebView(item.linkUrl)">
          <image class="swiper-pic" :src="item.imageUrl" mode="aspectFill"></image>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      indicatorDots: true,
      indicatorActiveColor: 'rgba(255, 255, 255, 0.8)',
      indicatorColor: 'rgba(255, 255, 255, 0.5)',
      autoplay: true,
      interval: 2000,
      duration: 500,
      circular: true
    };
  },
  mounted () {
  },
  methods: {
    goWebView(url) {
      uni.navigateTo({
        url: `/pages/webView/index?webViewUrl=${encodeURIComponent(url)}`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-container{
  .swiper {
    height: 300upx;
  }
  .swiper-item {
    display: block;
    // height: 300upx;
    text-align: center;
    .swiper-pic{
      display: block;
      height: 300upx;
      width: 100%;
    }
  }
  .swiper-list {
    margin-top: 40upx;
    margin-bottom: 0;
  }
}
</style>