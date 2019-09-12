<template>
  <div class="tab">
    <navigator
      url="/pages/recommend/index"
      :class="['tab-item', currentPage === 'recommend' && 'on']"
      hover-class="navigator-hover"
    >
      <div class="tab-link">推荐</div>
    </navigator>
    <navigator
      url="/pages/singer/index"
      :class="['tab-item', currentPage === 'singer' && 'on']"
      hover-class="navigator-hover"
    >
      <div class="tab-link">歌手</div>
    </navigator>
    <navigator
      url="/pages/rank/index"
      open-type="navigate"
      :class="['tab-item', currentPage === 'rank' && 'on']"
      hover-class="navigator-hover"
    >
      <div class="tab-link">排行</div>
    </navigator>
    <navigator 
      url="/pages/search/index" 
      :class="['tab-item', currentPage === 'search' && 'on']"
      hover-class="navigator-hover"
    >
      <div class="tab-link">搜索</div>
    </navigator>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String,
      default: 'recommend'
    }
  },
  data() {
    return {};
  },
  onShow: function() {
    console.log("qq");
  }
};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
.tab {
  display: flex;
  height: 88upx;
  line-height: 88upx;
  font-size: 32upx;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 10upx;
      color: $color-text-l;
      font-size: $font-size-medium;
      display: inline;
    }
    &.navigator-hover, &.on {
      background: transparent;
      .tab-link {
        color: $color-theme;
        border-bottom: 4upx solid $color-theme;
      }
    }
  }
}
</style>