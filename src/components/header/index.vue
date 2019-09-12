<template>
  <div class="m-header">
    <img class="logo" src="../../common/img/logo.png" />
    <h1 class="text">DoDoMusic</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../common/scss/variable";
.m-header{
  position: relative;
  height: 88upx;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .logo {
    height: 60upx;
    width: 60upx;
    margin-top: 16upx;
    margin-right: 18upx;
    display: inline-block;
    border-radius: 50%;
  }
  .text{
    display: inline-block;
    vertical-align: top;
    line-height: 88upx;
    font-size: $font-size-large;
  }
}
</style>