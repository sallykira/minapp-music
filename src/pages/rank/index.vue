<template>
  <div class="page">
    <v-header></v-header>
    <v-tab :currentPage="currentPage"></v-tab>
    <div class="toplist">
      <ul>
        <li @click="selectItem(item)" class="item" v-for="(item,index) in topList" :key="index">
          <div class="icon">
            <img :src="item.coverImgUrl" mode="widthFix"/>
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song,index) in item.tracks" :key="index">
              <span>{{index + 1}}</span>
              <span>{{song.first}}-{{song.second}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      currentPage: 'rank',
      topList: []
    };
  },
  onLoad() {
    this.getToplist();
  },
  methods: {
    // 获取排行榜列表
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
          if (res.data.code == 200) {
            this.topList = res.data.list.slice(0,4);  // 取前5个数据
          }
        }
      });
    },
    // 
    selectItem(data) {
      this.$router.push({
        path: `/rank/${item.id}`
      })
        // this.setTopList(item)
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../common/scss/variable";
 .toplist{
      height: 100%;
      overflow: hidden;
      .item{
        display: flex;
        margin: 0 40upx;
        padding-top: 40upx;
        height: 200upx;
        &:last-child{
          padding-bottom: 40upx;
        }
        .icon{
          flex: 0 0 200upx;
          width: 200upx;
          height: 200upx;
          image{
            width: 100%;
          }
        }
        .songlist{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 40upx;
          height: 200upx;
          overflow: hidden;
          background: $color-highlight-background;
          color: $color-text-d;
          font-size: $font-size-small;
          .song{
            // no-wrap()
            line-height: 52upx;
          }
        }
  }
}
</style>
