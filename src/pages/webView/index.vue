<template>
  <!-- <div class="page">
    <web-view :src="url"></web-view>
  </div> -->
  <view>
        <web-view :src="url"></web-view>
    </view>
</template>

<script>
export default {
  data() {
    return {
      webviewStyles: {
        progress: {
          color: "#FFF"
        }
      },
      url: ""
    };
  },
  onLoad(option) {
    console.log(decodeURIComponent(option.webViewUrl))
    this.url = decodeURIComponent(option.webViewUrl)
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
.page{
  width: 100%;
  height: 100%;
}
</style>