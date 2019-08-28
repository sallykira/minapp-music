<template>
  <view class="tab">
    <navigator url="/pages/index/index" redirect class="tab-item">
      <view class="tab-link">推荐</view>
    </navigator>
    <navigator url="/pages/singer/index" redirect class="tab-item">
      <view class="tab-link">歌手</view>
    </navigator>
    <navigator url="/pages/rank/index" redirect class="tab-item">
      <view class="tab-link">排行</view>
    </navigator>
    <navigator url="/pages/search/index" redirect class="tab-item">
      <view class="tab-link">搜索</view>
    </navigator>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 5px;
      color: $color-theme;
      font-size: $font-size-medium;
      &.router-link-active {
        .tab-link {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
}
</style>