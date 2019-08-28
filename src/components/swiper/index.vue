<template>
  <view class="swiper-container">
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :indicator-color="indicatorColor"
      :indicator-active-color="indicatorActiveColor"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item>
        <view class="swiper-item">A</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">B</view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">C</view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      indicatorDots: true,
      indicatorActiveColor: 'rgba(255, 255, 255, 0.8)',
      indicatorColor: 'rgba(255, 255, 255, 0.5)',
      autoplay: true,
      interval: 2000,
      duration: 500
    };
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
    height: 300upx;
    line-height: 300upx;
    text-align: center;
  }
  .swiper-list {
    margin-top: 40upx;
    margin-bottom: 0;
  }
}
</style>