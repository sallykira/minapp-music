<template>
  <view class="page">
    <v-header></v-header>
    <v-tab></v-tab>
    <view>test1</view>
  </view>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    getList() {
      
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
