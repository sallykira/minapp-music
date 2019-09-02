<template>
  <view class="tab">
    <navigator url="/pages/index/index" class="tab-item" animation-type="out" hover-class="navigator-hover">
      <view class="tab-link">推荐</view>
    </navigator>
    <navigator url="/pages/singer/index" open-type="navigate" class="tab-item" animation-type="pop-in" hover-class="navigator-hover">
      <view class="tab-link">歌手</view>
    </navigator>
    <navigator url="/pages/rank/index" open-type="navigate" class="tab-item"  animation-type="out" hover-class="navigator-hover">
      <view class="tab-link">排行</view>
    </navigator>
    <navigator url="/pages/search/index" class="tab-item">
      <view class="tab-link">搜索</view>
    </navigator>
  </view>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  	onShow: function() {
			console.log('qq')
		},
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
    &.navigator-hover{
      background: transparent;
      .tab-link {
        color: $color-theme;
        border-bottom: 4upx solid $color-theme;
      }
    }
    .tab-link {
      padding-bottom: 10upx;
      color: $color-theme;
      font-size: $font-size-medium;
      display: inline;
    }
  }
}
</style>